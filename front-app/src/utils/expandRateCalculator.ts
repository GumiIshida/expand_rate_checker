export function calculateExpandRate(width: number, height: number, expandedHeightPx : number): number {
    let screenRate = 2560 / 1600;

    //拡大倍率を計算
    let zoomPixel = expandedHeightPx * expandedHeightPx * screenRate;
    let wholePixel = width * height;
    return wholePixel / zoomPixel;
  }