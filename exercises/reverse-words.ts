function reverseWords(s: string): string {
  const sa = s.split(" ");

  return sa.map((v) => v.split("").reverse().join("")).join(" ");
}
