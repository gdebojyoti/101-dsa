// leetcode #215

function findKthLargest(nums: number[], k: number): number {
  // T = O(n * log k); S = O(k)
  
  const pq = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);

    if (k < i + 1) {
      pq.dequeue();
    }
  }

  return pq.front() as number;
};

// function findKthLargest(nums: number[], k: number): number {
//   const pq = MaxPriorityQueue.fromArray(nums);

//   for (let i = 0; i < k - 1; i++) {
//     pq.dequeue();
//   }

//   return pq.dequeue();
// };