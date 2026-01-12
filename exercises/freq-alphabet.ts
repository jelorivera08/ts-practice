const reverseMap: Record<string, string> = {
  "1": "a",
  "2": "b",
  "3": "c",
  "4": "d",
  "5": "e",
  "6": "f",
  "7": "g",
  "8": "h",
  "9": "i",
  "10#": "j",
  "11#": "k",
  "12#": "l",
  "13#": "m",
  "14#": "n",
  "15#": "o",
  "16#": "p",
  "17#": "q",
  "18#": "r",
  "19#": "s",
  "20#": "t",
  "21#": "u",
  "22#": "v",
  "23#": "w",
  "24#": "x",
  "25#": "y",
  "26#": "z",
};

function freqAlphabets(s: string): string {
  let i = 0;
  let j = 0;
  const words: string[] = [];
  const sa = s.split("");

  for (let i = 0; i < s.length; i++) {
    const isBig = sa[i + 2] === "#";
    if (isBig) {
      words.push(reverseMap[sa[i] + sa[i + 1] + sa[i + 2]]);
      i++;
      i++;
    } else {
      words.push(reverseMap[sa[i]]);
    }
  }

  return words.join("");
}
