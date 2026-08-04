// leetcode #231

function isPowerOfTwo(n: number): boolean {
  if (n < 1) {
    return false;
  }

  if (n === 1) {
    return true;
  }

  if (n % 2 === 1) {
    return false;
  }

  return isPowerOfTwo(n / 2);
};