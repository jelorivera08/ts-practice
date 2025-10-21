function reverseVowels(s: string): string {
  const vowels = "aeiou";

  const currentVowels = s
    .split("")
    .filter((v) => vowels.includes(v.toLowerCase()));

  const newString = s.split("").map((v) => {
    if (vowels.includes(v.toLowerCase())) {
      return currentVowels.pop();
    } else {
      return v;
    }
  });

  return newString.join("");
}
