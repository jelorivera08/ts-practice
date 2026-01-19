function xorOperation(n: number, start: number): number {
  const a = new Array(n).fill(0).map((v, i) => start + 2 * i);

  return a.reduce((a, b) => a ^ b);
}
