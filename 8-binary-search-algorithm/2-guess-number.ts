// leetcode #374

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
  let l = 1, r = n;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    
    if (guess(mid) === 0) {
      return mid;
    }

    if (guess(mid) === -1) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1; // not required
};