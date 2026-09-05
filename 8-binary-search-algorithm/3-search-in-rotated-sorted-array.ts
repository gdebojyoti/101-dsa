// leetcode #33

function search(nums: number[], target: number): number {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const nM = nums[m];

    if (target === nM) {
      return m;
    }

    const nL = nums[l];
    const nR = nums[r];

    // check if left half is sorted
    if (nL <= nM) {
      if (nL <= target && target < nM) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else { // else, right half is sorted
      if (nM < target && target <= nR) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    // if ((nL <= target && target < nM) || (nL > nM && target >= nL) || (nL > nM && target < nM)) {
    //   r = m - 1;
    // } else {
    //   l = m + 1;
    // }
  }

  return -1;
};