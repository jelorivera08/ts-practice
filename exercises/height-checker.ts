function heightChecker(heights: number[]): number {
  return [...heights].sort().filter((v, i) => heights[i] !== v).length;
}
