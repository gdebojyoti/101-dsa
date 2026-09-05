// leetcode #69

function mySqrt(x: number): number {
  if (x < 2) {
    return x;
  }

  let l = 2, r = Math.floor(x / 2);

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (x > mid * mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r;
};