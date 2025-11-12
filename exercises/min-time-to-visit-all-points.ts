function minTimeToVisitAllPoints(points: number[][]): number {
  let steps = 0;
  const safety = 100000;

  let [xs, ys] = points[0];

  for (const [xn, yn] of points.splice(1, points.length)) {
    while ((xs !== xn || ys !== yn) && steps < safety) {
      const goRight = xn > xs;
      const goUp = yn > ys;
      const goLeft = xn < xs;
      const goDown = yn < ys;

      if (goRight && goUp) {
        xs += 1;
        ys += 1;
      } else if (goDown && goLeft) {
        xs -= 1;
        ys -= 1;
      } else if (goLeft && goUp) {
        xs -= 1;
        ys += 1;
      } else if (goDown && goRight) {
        xs += 1;
        ys -= 1;
      } else if (goRight) {
        xs += 1;
      } else if (goLeft) {
        xs -= 1;
      } else if (goUp) {
        ys += 1;
      } else if (goDown) {
        ys -= 1;
      }

      steps++;
    }
  }

  return steps;
}
