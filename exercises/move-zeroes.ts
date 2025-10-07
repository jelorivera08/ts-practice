/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const nonzero = nums.filter((v) => v !== 0);
  const zero = nums.filter((v) => v === 0);
  const correct = [...nonzero, ...zero];

  for (let [i, c] of correct.entries()) {
    nums[i] = c;
  }
  console.log(nums);
}
