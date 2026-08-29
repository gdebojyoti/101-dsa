// leetcode #496

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map: Record<number, number> = {};
  const stack: number[] = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    const curr = nums2[i];
    
    // find top most element from stack that is higher than current element
    while (stack.length) {
      const top = stack[stack.length - 1];

      // remove if top is smaller than current
      if (top < curr) {
        stack.pop();
        continue;
      }

      // top is higher; so update map and exit loop
      map[curr] = top;
      break;
    }

    if (!stack.length) {
      map[curr] = -1;
    }

    // add current to stack
    stack.push(curr);
  }

  return nums1.map(n => map[n]);
};