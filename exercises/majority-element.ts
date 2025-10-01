function majorityElement(nums: number[]): number {
  const counts: Record<number, number> = {};
  let me = 0;

  nums.map((num) => {
    const ex = counts[num];
    console.log(ex);

    if (ex) {
      counts[num] = counts[num] + 1;
    } else {
      counts[num] = 1;
    }

    if (counts[num] > nums.length / 2) {
      me = num;
      return;
    }
  });

  return me;
}
