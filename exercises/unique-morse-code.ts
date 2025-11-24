const alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
} as Record<string, string>;

function uniqueMorseRepresentations(words: string[]): number {
  return new Array(
    ...new Set(
      words.map((word) =>
        word
          .split("")
          .map((w) => alphabet[w])
          .join("")
      )
    )
  ).length;
}
