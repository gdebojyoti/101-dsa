// leetcode #15

function threeSum(nums: number[]): number[][] {
  const arr = nums.sort((a, b) => a < b ? -1 : 1);
  const answer = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    }

    let j = i + 1, k = arr.length - 1;
    const target = -arr[i];

    while (j < k) {
      const sum = arr[j] + arr[k];

      if (target === sum) {
        if (arr[k] !== arr[k + 1]) {
          answer.push([arr[i], arr[j], arr[k]]);
        }

        j++;
        k--;
      } else if (target < sum) {
        k--;
      } else {
        j++;
      }
    }
  }

  return answer;
};