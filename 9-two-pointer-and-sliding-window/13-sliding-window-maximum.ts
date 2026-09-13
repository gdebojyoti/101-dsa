// leetcode #239

function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque: number[] = [];
  const result: number[] = []

  // populate for initial k elements
  for (let i = 0; i < k; i++) {
    updateDeque(deque, nums[i]);
  }
  result.push(deque[0]);

  for (let i = 1; i <= nums.length - k; i++) {
    // check if previous number (i-1) is same as current max
    if (nums[i - 1] === deque[0]) {
      deque.shift();
    }

    // update deque with latest number (at the end of current window)
    updateDeque(deque, nums[i + k - 1]);

    // add max / first element from deque to result
    result.push(deque[0]);
  }

  return result;
};

function updateDeque (q: number[], n: number) {
  while (q.length && n > q[q.length - 1]) {
    q.pop();
  }

  q.push(n);
}