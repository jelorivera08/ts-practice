/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const allNums = [...nums1.filter((x, i) => i < m), ...nums2].sort(
    (a, b) => a - b
  );
  allNums.map((a, i) => {
    nums1[i] = a;
  });
}
