// leetcode #162

function findPeakElement(nums: number[]): number {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    const m = l + Math.floor((r - l) / 2);

    if (nums[m] > nums[m + 1]) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
};