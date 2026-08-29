// leetcode #503

function nextGreaterElements(nums: number[]): number[] {
  // init
  const length = nums.length;
  const ans = Array(length * 2);
  const stack = [];

  // loop through elements twice
  for (let i = 2 * length - 1; i >= 0; i--) {
    // current
    const curr = nums[i % length];

    // find top most value from stack that is higher
    while (stack.length) {
      const top = stack[stack.length - 1];

      if (top > curr) {
        ans[i] = top;
        break;
      }

      // remove top most if it is lower
      stack.pop();
    }

    // if stack is empty, set value as -1
    if (!stack.length) {
      ans[i] = -1;
    }

    // push current value to stack
    stack.push(curr);
  }

  return ans.slice(0, length);
};