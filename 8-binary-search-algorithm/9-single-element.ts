// leetcode #540

function singleNonDuplicate(nums: number[]): number {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    const m = l + Math.floor((r - l) / 2);

    const curr = nums[m];
    const prev = nums[m - 1];
    const next = nums[m + 1];

    // check if m is answer
    if (curr !== prev && curr !== next) {
      return curr;
    }

    if (m % 2 === 0) { // for even
      if (curr === next) { // pair is on the right
        l = m + 2;
      } else { // pair is on the left
        r = m - 2;
      }
    } else { // for odd
      if (curr === prev) { // pair on left
        l = m + 1;
      } else { // pair on right
        r = m - 1;
      }
    }
  }

  return nums[l];
};