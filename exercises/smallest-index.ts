function smallestIndex(nums: number[]): number {
  return (
    nums.findIndex(
      (v, i) =>
        i ===
        +v
          .toFixed()
          .split("")
          .reduce((a, b) => `${+a + +b}`),
    ) ?? -1
  );
}
