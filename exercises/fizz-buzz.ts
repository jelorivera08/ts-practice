function fizzBuzz(n: number): string[] {
  const foo = new Array(n).fill(0);

  return foo.map((v, i) => {
    const q = i + 1;

    if (q % 5 === 0 && q % 3 === 0) {
      return "FizzBuzz";
    } else if (q % 5 === 0) {
      return "Buzz";
    } else if (q % 3 === 0) {
      return "Fizz";
    } else {
      return `${q}`;
    }
  });
}
