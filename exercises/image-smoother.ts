function imageSmoother(img: number[][]): number[][] {
  const x = img[0].length;
  const y = img.length;
  let newImg = img.map((v) => new Array(v.length).fill(0));

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      newImg[i][j] = getPointAverage([i, j], img);
    }
  }

  return newImg;
}

const getPointAverage = (point: [number, number], img: number[][]) => {
  let total = 0;
  const [x, y] = point;
  let denominator = 9;
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      const val = img[i]?.[j];

      if (val !== undefined) {
        total += val;
      } else {
        total += 0;
        denominator -= 1;
      }
    }
  }

  return Math.floor(total / denominator);
};
