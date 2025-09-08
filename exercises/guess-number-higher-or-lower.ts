/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guess = (n: number) =>
  Math.random() < 0.5 ? (Math.random() < 0.5 ? 0 : 1) : -1;

const tryGuess = (start: number, end: number) => {
  const mid = (start + end) / 2;

  const result = guess(mid);

  if (result === 0) {
    return mid;
  }

  if (result === -1) {
    return tryGuess(start, mid);
  }

  if (result === 1) {
    return tryGuess(mid, end);
  }

  return tryGuess(start, end);
};

function guessNumber(n: number): number {
  return tryGuess(0, n);
}
