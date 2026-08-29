// leetcode #503

function nextGreaterElements(nums: number[]): number[] {
  let ans = new Array(nums.length);
  let stack = [];

  // init stack with all elements from nums
  for (let i = nums.length - 1; i >= 0; i--) {
    stack.push(nums[i]);
  }

  // check for each element
  for (let j = nums.length - 1; j >= 0; j--) {
    const curr = nums[j];

    // find top most element in stack that is greater than current
    while (stack.length) {
      const top = stack[stack.length - 1];

      // check if top is greater
      if (top > curr) {
        ans[j] = top;
        break;
      }

      // else remove top most
      stack.pop();
    }

    // if stack is empty, there is no greater number
    if (!stack.length) {
      ans[j] = -1;
    }

    // add current number to top of stack
    stack.push(curr);
  }

  return ans;
};