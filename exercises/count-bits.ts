function countBits(n: number): number[] {
  const ans = [];
  for (let i = 0; i <= n; i++) {
    const bitVal = i.toString(2);
    const numberOfOnes = bitVal.split("").filter((v) => v === "1").length;

    ans.push(numberOfOnes);
  }

  return ans;
}
