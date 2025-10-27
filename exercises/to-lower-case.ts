function toLowerCase(s: string): string {
  let alphabet: Record<string, string> = {};
  let la = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));
  let ua = la.map((a) => a.toUpperCase());

  ua.map((uv, i) => {
    alphabet[uv] = la[i];
  });

  return s
    .split("")
    .map((v) => {
      if (ua.includes(v)) {
        return alphabet[v];
      } else {
        return v;
      }
    })
    .join("");
}
