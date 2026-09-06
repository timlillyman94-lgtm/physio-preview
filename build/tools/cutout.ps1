# Background remover for club crests: edge-seeded region-growing flood fill,
# then trim to the bounding box of what survives.
# Usage: .\cutout.ps1 -In <path> -Out <path> [-Tol 40] [-Size 400]
param(
  [Parameter(Mandatory = $true)][string]$In,
  [Parameter(Mandatory = $true)][string]$Out,
  [int]$Tol = 40,
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
  public static string Run(string inPath, string outPath, int tol, int size) {
    Bitmap src = new Bitmap(inPath);
    int w = src.Width, h = src.Height;
    Bitmap bmp = new Bitmap(w, h, PixelFormat.Format32bppArgb);
    using (Graphics g = Graphics.FromImage(bmp)) g.DrawImage(src, 0, 0, w, h);
    src.Dispose();

    BitmapData bd = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
    int stride = bd.Stride;
    byte[] px = new byte[stride * h];
    Marshal.Copy(bd.Scan0, px, 0, px.Length);

    bool[] bg = new bool[w * h];
    Queue<int> q = new Queue<int>();
    // seed from every border pixel
    for (int x = 0; x < w; x++) { Seed(bg, q, x, 0, w); Seed(bg, q, x, h - 1, w); }
    for (int y = 0; y < h; y++) { Seed(bg, q, 0, y, w); Seed(bg, q, w - 1, y, w); }

    int[] dx = { 1, -1, 0, 0 };
    int[] dy = { 0, 0, 1, -1 };
    while (q.Count > 0) {
      int i = q.Dequeue();
      int cx = i % w, cy = i / w;
      int o = cy * stride + cx * 4;
      int b0 = px[o], g0 = px[o + 1], r0 = px[o + 2];
      for (int k = 0; k < 4; k++) {
        int nx = cx + dx[k], ny = cy + dy[k];
        if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
        int ni = ny * w + nx;
        if (bg[ni]) continue;
        int no = ny * stride + nx * 4;
        int d = Math.Abs(px[no] - b0) + Math.Abs(px[no + 1] - g0) + Math.Abs(px[no + 2] - r0);
        if (d <= tol) { bg[ni] = true; q.Enqueue(ni); }
      }
    }

    // punch out background, and record the bounding box of what remains
    int minX = w, minY = h, maxX = -1, maxY = -1, kept = 0;
    for (int y = 0; y < h; y++) {
      for (int x = 0; x < w; x++) {
        int o = y * stride + x * 4;
        if (bg[y * w + x]) { px[o + 3] = 0; }
        else {
          kept++;
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
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
    string r = string.Format("{0}x{1} -> box {2}x{3}, {4:F1}% removed", w, h, box.Width, box.Height, pctRemoved);
    crop.Dispose(); outBmp.Dispose();
    return r;
  }

  static void Seed(bool[] bg, Queue<int> q, int x, int y, int w) {
    int i = y * w + x;
    if (!bg[i]) { bg[i] = true; q.Enqueue(i); }
  }
}
"@
}

$res = [Cutout]::Run($In, $Out, $Tol, $Size)
"{0,-34} tol={1,-4} {2}" -f (Split-Path $In -Leaf), $Tol, $res
