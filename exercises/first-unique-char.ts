function firstUniqChar(s: string): number {
  const foo: Record<string, number> = {};
  let ans = -1;

  s.split("").map((val) => {
    if (foo[val]) {
      foo[val] += 1;
    } else {
      foo[val] = 1;
    }
  });

  for (const [val, count] of Object.entries(foo)) {
    if (count === 1) {
      ans = s.split("").findIndex((vai) => vai === val);
      break;
    }
  }

  console.log(ans);

  return ans;
}
