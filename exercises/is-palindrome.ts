const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";

function isPalindrome(s: string): boolean {
  const newS = s
    .toLowerCase()
    .split("")
    .filter((a) => alphabet.includes(a))
    .join("");

  return newS === newS.split("").reverse().join("");
}
