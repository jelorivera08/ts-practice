function isHappy(n: number): boolean {
  let sum = n;
  let counter = 0;

  while (sum !== 1 && counter < 10) {
    counter++;
    const nString = sum.toString();

    const nNumber = nString.split("").map((v) => {
      return parseInt(v);
    });

    sum = nNumber.reduce((acc, curr) => {
      return acc + curr ** 2;
    }, 0);

    console.log(sum);
  }

  return sum === 1;
}
