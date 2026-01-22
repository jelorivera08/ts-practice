function smallerNumbersThanCurrent(nums: number[]): number[] {
  return nums.map((v) => nums.filter((a) => v > a).length);
}
