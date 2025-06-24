const makeSameLengthArray = (a: string, b: string) => {
  const longerArrayLength = Math.max(a.length, b.length);

  const newA =
    a.length === longerArrayLength
      ? a.split("")
      : [...new Array(longerArrayLength - a.length).fill("0"), ...a.split("")];
  const newB =
    b.length === longerArrayLength
      ? b.split("")
      : [...new Array(longerArrayLength - b.length).fill("0"), ...b.split("")];

  return [newA, newB];
};

function addBinary(a: string, b: string): string {
  const [aArray, bArray] = makeSameLengthArray(a, b);
  const reverseA = aArray.reverse();
  const reverseB = bArray.reverse();

  const sum: string[] = [];

  let carryOver = 0;

  for (let i = 0; i < reverseA.length; i++) {
    const currentSum = Number(reverseA[i]) + Number(reverseB[i]) + carryOver;

    if (currentSum === 3) {
      sum.push("1");
      carryOver = 1;
    } else if (currentSum === 2) {
      sum.push("0");
      carryOver = 1;
    } else if (currentSum === 1) {
      sum.push("1");
      carryOver = 0;
    } else {
      sum.push("0");
      carryOver = 0;
    }

    if (i === reverseA.length - 1 && carryOver > 0) {
      sum.push("1");
      carryOver = 0;
    }
  }

  return sum.reverse().join("");
}
