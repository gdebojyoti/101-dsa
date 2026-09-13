// leetcode #1

function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];

    if (typeof map[remainder] === "number") {
      return [i, map[remainder]];
    }

    map[nums[i]] = i;
  }

  return [-1, -1]; // this case will never happen
};