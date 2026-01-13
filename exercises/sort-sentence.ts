function sortSentence(s: string): string {
  return s
    .split(" ")
    .sort((a, b) => {
      return a[a.length - 1] > b[b.length - 1] ? 1 : -1;
    })
    .map((v) => v.substring(0, v.length - 1))
    .join(" ");
}
