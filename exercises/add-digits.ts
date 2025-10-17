function addDigits(num: number): number {
  while (num >= 10) {
    num = Math.floor(num / 10) + (num % 10);
  }

  return num;
}
