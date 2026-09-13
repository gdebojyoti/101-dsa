// leetcode #11

function maxArea(height: number[]): number {
  let maxArea = 0;

  let i = 0, j = height.length - 1;

  while (i < j) {
    const currentArea = Math.min(height[i], height[j]) * (j - i);
    maxArea = Math.max(currentArea, maxArea);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
};