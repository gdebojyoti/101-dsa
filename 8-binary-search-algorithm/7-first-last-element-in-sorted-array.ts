// leetcode #34

function searchRange(nums: number[], target: number): number[] {
  let l = 0, r = nums.length - 1;

  // find first index of target
  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) { // target match
      r = m;
    } else if (nums[m] > target) { // target is lower than mid-point
      r = m - 1;
    } else { // target is higher than mid-point
      l = m + 1;
    }
  }

  // exit if target is not found
  if (nums[l] !== target) {
    return [-1, -1];
  }

  const firstIndex = l;

  r = nums.length - 1; // reset r; l remains where it was

  // find last index of target
  while (l < r) {
    const m = l + Math.ceil((r - l) / 2);

    if (nums[m] === target) { // target matched
      l = m;
    } else if (nums[m] > target) { // target is lower
      r = m - 1;
    } else { // target is higher
      l = m + 1;
    }
  }

  const lastIndex = l;

  return [firstIndex, lastIndex];
};