// leetcode #283

function moveZeroes(nums: number[]): void {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[counter] = nums[i];
      counter++;
    }
  }

  for (let i = counter; i < nums.length; i++) {
    nums[i] = 0;
  }
};