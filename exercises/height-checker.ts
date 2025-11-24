function heightChecker(heights: number[]): number {
  return [...heights]
    .sort((a, b) => (a > b ? 1 : -1))
    .filter((v, i) => heights[i] !== v).length;
}
