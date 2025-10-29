function numJewelsInStones(jewels: string, stones: string): number {
  return stones.split("").filter((s) => jewels.split("").includes(s)).length;
}
