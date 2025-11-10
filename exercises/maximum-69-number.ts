function maximum69Number(num: number): number {
  const numArray = num.toString().split("");

  const numToChange = numArray.findIndex((v) => v === "6");

  if (numToChange !== -1) {
    numArray[numToChange] = "9";

    return Number(numArray.join("").toString());
  }

  return num;
}
