function findTheDifference(s: string, t: string): string {
  const sa = s.split("");
  let ta = t.split("");

  while (sa.length) {
    const current = sa.pop();

    const tac = ta.findIndex((tai) => tai === current);
    ta[tac] = "remove";

    ta = ta.filter((tai) => tai !== "remove");
  }

  return ta.pop() as string;
}
