function flipAndInvertImage(image: number[][]): number[][] {
  return image.map((im) => im.reverse().map((v) => (v === 0 ? 1 : 0)));
}
