// leetcode #485

function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0, current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      current++;
      max = max > current ? max : current;
    } else {
      current = 0;
    }
  }

  return max;
};