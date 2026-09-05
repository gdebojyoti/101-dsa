// leetcode #153

function findMin(nums: number[]): number {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    // when searching space ("sample space") is already sorted
    if (nums[l] <= nums[r]) {
      return nums[l];
    }

    const m = l + Math.floor((r - l) / 2);

    // check if m is point of rotation (ignore if m is the first element in the array)
    if (m !== 0 && nums[m - 1] > nums[m]) {
      return nums[m];
    }

    if (nums[l] <= nums[m]) { // left half is sorted
      l = m + 1;
    } else { // right half is sorted
      r = m - 1;
    }
  }
};