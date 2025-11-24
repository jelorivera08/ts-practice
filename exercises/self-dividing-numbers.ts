function selfDividingNumbers(left: number, right: number): number[] {
  return new Array(right + 1 - left)
    .fill(0)
    .map(() => left++)
    .filter((v) =>
      v
        .toString()
        .split("")
        .every((vx) => v % Number(vx) === 0)
    );
}
