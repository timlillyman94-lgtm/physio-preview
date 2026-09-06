# Background remover for club crests.
#
#   -Mode Grow   (default) region-growing flood fill: each pixel joins the
#                background if it is within -Tol of the neighbour it was reached
#                from. Good for plain or softly-graded backgrounds.
#
#   -Mode Global flood fill constrained to a palette sampled from the image
#                border. A pixel joins only if it is connected to the edge AND
#                within -Tol of one of those reference colours. Use this when the
#                background shares a colour family with the artwork — Grow will
#                walk a gradient straight into the logo, Global will not.
#
#   -MinBlob <pct>  after the fill, discard surviving islands smaller than this
#                percentage of the image. Clears fine speckle.
#
#   -Attach <px>    keep the biggest surviving island plus any island within this
#                many pixels of it. Small detached parts of a logo (a ball above a
#                shield, an "FC" roundel below it) sit a few pixels away; background
#                speckle sits much further off. Use when a size threshold alone
#                cannot separate the two.
#
# Usage: .\cutout.ps1 -In <path> -Out <path> [-Tol 40] [-Mode Grow|Global]
#                     [-MinBlob 0.15] [-Attach 8] [-Size 400]
param(
  [Parameter(Mandatory = $true)][string]$In,
  [Parameter(Mandatory = $true)][string]$Out,
  [int]$Tol = 40,
  [ValidateSet('Grow', 'Global')][string]$Mode = 'Grow',
  [double]$MinBlob = 0,
  [double]$Attach = 0,
  [int]$Size = 400
)

Add-Type -AssemblyName System.Drawing
if (-not ("Cutout" -as [type])) {
Add-Type -ReferencedAssemblies System.Drawing, System.Drawing.Primitives @"
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class Cutout {
  public static string Run(string inPath, string outPath, int tol, string mode, double minBlob, double attach, int size) {
    Bitmap src = new Bitmap(inPath);
    int w = src.Width, h = src.Height;
    Bitmap bmp = new Bitmap(w, h, PixelFormat.Format32bppArgb);
    using (Graphics g = Graphics.FromImage(bmp)) g.DrawImage(src, 0, 0, w, h);
    src.Dispose();

    BitmapData bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
    int stride = bd.Stride;
    byte[] px = new byte[stride * h];
    Marshal.Copy(bd.Scan0, px, 0, px.Length);

    bool global = (mode == "Global");
    List<int[]> refs = new List<int[]>();
    string refDesc = "";
    if (global) {
      // build a palette from the border: quantise, keep buckets holding >=2% of edge pixels
      Dictionary<int, int[]> buckets = new Dictionary<int, int[]>();
      int edgeCount = 0;
      for (int y = 0; y < h; y++)
        for (int x = 0; x < w; x++) {
          if (x > 2 && x < w - 3 && y > 2 && y < h - 3) continue;
          int o = y * stride + x * 4;
          int key = (px[o + 2] / 24) * 10000 + (px[o + 1] / 24) * 100 + (px[o] / 24);
          if (!buckets.ContainsKey(key)) buckets[key] = new int[4];
          buckets[key][0] += px[o + 2]; buckets[key][1] += px[o + 1];
          buckets[key][2] += px[o]; buckets[key][3]++;
          edgeCount++;
        }
      foreach (KeyValuePair<int, int[]> kv in buckets) {
        int n = kv.Value[3];
        if (n * 50 < edgeCount) continue;
        refs.Add(new int[] { kv.Value[0] / n, kv.Value[1] / n, kv.Value[2] / n });
      }
      foreach (int[] r in refs) refDesc += string.Format(" rgb({0},{1},{2})", r[0], r[1], r[2]);
    }

    bool[] bg = new bool[w * h];
    Queue<int> q = new Queue<int>();
    for (int x = 0; x < w; x++) { Seed(bg, q, x, 0, w); Seed(bg, q, x, h - 1, w); }
    for (int y = 0; y < h; y++) { Seed(bg, q, 0, y, w); Seed(bg, q, w - 1, y, w); }

    int[] dx = { 1, -1, 0, 0 };
    int[] dy = { 0, 0, 1, -1 };
    while (q.Count > 0) {
      int i = q.Dequeue();
      int cx = i % w, cy = i / w;
      int o = cy * stride + cx * 4;
      for (int k = 0; k < 4; k++) {
        int nx = cx + dx[k], ny = cy + dy[k];
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
        int ni = ny * w + nx;
        if (bg[ni]) continue;
        int no = ny * stride + nx * 4;
        bool ok;
        if (global) {
          ok = false;
          for (int r = 0; r < refs.Count; r++) {
            int d = Math.Abs(px[no + 2] - refs[r][0]) + Math.Abs(px[no + 1] - refs[r][1]) + Math.Abs(px[no] - refs[r][2]);
            if (d <= tol) { ok = true; break; }
          }
        } else {
          int d = Math.Abs(px[no] - px[o]) + Math.Abs(px[no + 1] - px[o + 1]) + Math.Abs(px[no + 2] - px[o + 2]);
          ok = (d <= tol);
        }
        if (ok) { bg[ni] = true; q.Enqueue(ni); }
      }
    }

    // Clean-up pass over the surviving islands.
    //   minBlob : drop islands smaller than this % of the image.
    //   attach  : keep the biggest island, plus any island whose centroid falls
    //             inside its bounding box grown by this %. Small parts of a logo
    //             (a ball above a shield, an "FC" roundel on it) sit inside that
    //             box; background speckle sits outside it. Use this when a size
    //             threshold cannot separate the two.
    int dropped = 0;
    if (minBlob > 0 || attach > 0) {
      bool[] seen = new bool[w * h];
      int[] stack = new int[w * h];
      List<int[]> blobs = new List<int[]>();      // minX,minY,maxX,maxY,count,startIdx
      List<List<int>> members = new List<List<int>>();
      for (int i0 = 0; i0 < w * h; i0++) {
        if (bg[i0] || seen[i0]) continue;
        List<int> blob = new List<int>();
        int bminX = w, bminY = h, bmaxX = -1, bmaxY = -1;
        int sp = 0; stack[sp++] = i0; seen[i0] = true;
        while (sp > 0) {
          int i = stack[--sp];
          blob.Add(i);
          int cx = i % w, cy = i / w;
          if (cx < bminX) bminX = cx; if (cx > bmaxX) bmaxX = cx;
          if (cy < bminY) bminY = cy; if (cy > bmaxY) bmaxY = cy;
          for (int k = 0; k < 4; k++) {
            int nx = cx + dx[k], ny = cy + dy[k];
            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
            int ni = ny * w + nx;
            if (bg[ni] || seen[ni]) continue;
            seen[ni] = true; stack[sp++] = ni;
          }
        }
        blobs.Add(new int[] { bminX, bminY, bmaxX, bmaxY, blob.Count });
        members.Add(blob);
      }

      int big = -1, bigN = -1;
      for (int i = 0; i < blobs.Count; i++) if (blobs[i][4] > bigN) { bigN = blobs[i][4]; big = i; }

      // grow the main blob by `attach` pixels; anything touching the grown mask is
      // treated as part of the logo. A ball sitting a few pixels above a shield is
      // caught; speckle tens of pixels away is not.
      bool[] near = null;
      if (attach > 0 && big >= 0) {
        near = new bool[w * h];
        List<int> m0 = members[big];
        for (int j = 0; j < m0.Count; j++) near[m0[j]] = true;
        bool[] next = new bool[w * h];
        for (int r = 0; r < (int)attach; r++) {
          Array.Copy(near, next, near.Length);
          for (int i = 0; i < w * h; i++) {
            if (!near[i]) continue;
            int cx = i % w, cy = i / w;
            for (int k = 0; k < 4; k++) {
              int nx = cx + dx[k], ny = cy + dy[k];
              if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
              next[ny * w + nx] = true;
            }
          }
          Array.Copy(next, near, near.Length);
        }
      }

      int limit = (int)(w * h * minBlob / 100.0);
      for (int i = 0; i < blobs.Count; i++) {
        if (i == big) continue;
        bool keep = true;
        if (minBlob > 0 && blobs[i][4] < limit) keep = false;
        if (near != null) {
          bool touches = false;
          List<int> m = members[i];
          for (int j = 0; j < m.Count && !touches; j++) if (near[m[j]]) touches = true;
          keep = keep && touches;
        }
        if (!keep) { List<int> m = members[i]; for (int j = 0; j < m.Count; j++) bg[m[j]] = true; dropped++; }
      }
    }

    int minX = w, minY = h, maxX = -1, maxY = -1, kept = 0;
    for (int y = 0; y < h; y++)
      for (int x = 0; x < w; x++) {
        int o = y * stride + x * 4;
        if (bg[y * w + x]) { px[o + 3] = 0; }
        else {
          kept++;
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
      }
    Marshal.Copy(px, 0, bd.Scan0, px.Length);
    bmp.UnlockBits(bd);

    if (maxX < 0) { bmp.Dispose(); return "FAILED: everything was treated as background"; }
    double pctRemoved = 100.0 * (w * h - kept) / (w * h);

    Rectangle box = new Rectangle(minX, minY, maxX - minX + 1, maxY - minY + 1);
    Bitmap crop = bmp.Clone(box, PixelFormat.Format32bppArgb);
    bmp.Dispose();

    Bitmap outBmp = new Bitmap(size, size, PixelFormat.Format32bppArgb);
    using (Graphics g2 = Graphics.FromImage(outBmp)) {
      g2.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;
      g2.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.HighQuality;
      g2.PixelOffsetMode = System.Drawing.Drawing2D.PixelOffsetMode.HighQuality;
      double sc = Math.Min(size * 0.94 / crop.Width, size * 0.94 / crop.Height);
      int dw = (int)(crop.Width * sc), dh = (int)(crop.Height * sc);
      g2.DrawImage(crop, (size - dw) / 2, (size - dh) / 2, dw, dh);
    }
    outBmp.Save(outPath, ImageFormat.Png);
    string r2 = string.Format("{0}x{1} -> box {2}x{3}, {4:F1}% removed{5}{6}",
      w, h, box.Width, box.Height, pctRemoved,
      dropped > 0 ? ", " + dropped + " specks dropped" : "",
      refDesc == "" ? "" : "  refs:" + refDesc);
    crop.Dispose(); outBmp.Dispose();
    return r2;
  }

  static void Seed(bool[] bg, Queue<int> q, int x, int y, int w) {
    int i = y * w + x;
    if (!bg[i]) { bg[i] = true; q.Enqueue(i); }
  }
}
"@
}

$res = [Cutout]::Run($In, $Out, $Tol, $Mode, $MinBlob, $Attach, $Size)
"{0,-30} {1,-6} tol={2,-4} {3}" -f (Split-Path $In -Leaf), $Mode, $Tol, $res
