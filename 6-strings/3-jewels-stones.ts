// leetcode #771

function numJewelsInStones(jewels: string, stones: string): number {
  const map = new Set();

  // update map from jewels
  for (let i = 0; i < jewels.length; i++) {
    map.add(jewels[i]);
  }

  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      count++;
    }
  }

  return count;
};