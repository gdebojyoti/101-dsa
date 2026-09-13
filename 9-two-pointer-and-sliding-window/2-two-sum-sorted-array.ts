// leetcode #167

function twoSum(numbers: number[], target: number): number[] {
  let l = 0, r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];

    if (sum === target) {
      return [l + 1, r + 1];
    }

    if (sum > target) {
      r--;
    } else {
      l++;
    }
  }

  return [-1, -1]; // this case will never happen
};