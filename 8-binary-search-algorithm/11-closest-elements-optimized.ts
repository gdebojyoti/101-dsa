// leetcode #658

function findClosestElements(arr: number[], k: number, x: number): number[] {
  let l = 0, r = arr.length - 1;

  while (l < r) {
    const m = l + Math.floor((r - l) / 2);

    if (x - arr[m] > arr[m + k] - x) { // shift right
      l = m + 1;
    } else { // shift left
      r = m;
    }
  }

  return arr.slice(l, l + k);
};