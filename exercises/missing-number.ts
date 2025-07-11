function missingNumber(nums: number[]): number {
  const realArray = new Array(nums.length + 1).fill(0).map((v, i) => i);

  let mn = 0;

  realArray.map((r) => {
    if (!nums.includes(r)) {
      mn = r;
    }
  });

  return mn;
}
