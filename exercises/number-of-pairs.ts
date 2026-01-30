function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  let yeah = 0;
  for (let i = 0; i <= nums1.length - 1; i++) {
    for (let j = 0; j <= nums2.length - 1; j++) {
      console.log(nums1[i], nums2[j]);
      if (nums1[i] % (nums2[j] * k) === 0) {
        yeah++;
      }
    }
  }

  return yeah;
}
