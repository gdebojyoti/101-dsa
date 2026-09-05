// leetcode #852

function peakIndexInMountainArray(arr: number[]): number {
  let l = 0, r = arr.length - 1;

  while (l < r) {
    const m = l + Math.ceil((r - l) / 2);

    if (arr[m] > arr[m - 1]) {
      l = m;
    } else {
      r = m - 1;
    }
  }

  return l;
};