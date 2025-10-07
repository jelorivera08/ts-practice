/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let pointer = 0;
  let sorting = true;
  const totalZeroLength = nums.length - nums.filter((v) => v === 0).length;

  while (sorting) {
    // real
    if (nums[pointer] === 0) {
      for (let i = pointer; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
      }

      nums.pop();
      nums.push(0);
    }

    if (pointer < totalZeroLength && nums[pointer] === 0) {
      pointer = 0;
    } else if (pointer >= nums.length - 1 || pointer === totalZeroLength) {
      sorting = false;
    } else if (pointer < nums.length - 1) {
      pointer++;
    }
  }

  console.log(nums);
}
