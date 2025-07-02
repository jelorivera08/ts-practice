const alphabet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function titleToNumber(columnTitle: string): number {
  let sum = 0;
  const ct = columnTitle.split("").reverse();

  ct.map((v, i) => {
    sum += alphabet.indexOf(v) * 26 ** i;
  });

  return sum;
}
