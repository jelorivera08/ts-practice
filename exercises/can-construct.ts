function canConstruct(ransomNote: string, magazine: string): boolean {
  const marray: Array<string | null> = magazine.split("");
  let can = true;

  for (const rn of ransomNote) {
    const mi = marray.findIndex((v) => v === rn);

    if (mi !== -1) {
      marray[mi] = null;
    } else {
      can = false;
    }
  }

  return can;
}
