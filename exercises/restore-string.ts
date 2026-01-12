function restoreString(s: string, indices: number[]): string {
  const sa = s.split("");

  const newS = new Array(indices.length).fill(0);

  sa.map((v, i) => (newS[indices[i]] = v));

  return newS.join("");
}
