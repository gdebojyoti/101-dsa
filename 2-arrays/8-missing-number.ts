// leetcode #268

function missingNumber(nums: number[]): number {
  // let sum = 0;
  // let max = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  //   max += i;
  // }

  // max += nums.length;

  // return max - sum;

  let difference = 0;

  for (let i = 0; i < nums.length; i++) {
    difference = difference + i - nums[i];
  }

  return difference + nums.length;
};