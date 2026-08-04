// leetcode #136
// bit manipulation
// TODO: redo this problem using "XOR"; fix the TS errors in the current solution as well

function singleNumber(nums: number[]): number {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
      const value = nums[i];
      if (obj[value]) {
          delete obj[value];
      } else {
          obj[value] = true;
      }
  }

  return parseInt(Object.keys(obj)[0]);
};