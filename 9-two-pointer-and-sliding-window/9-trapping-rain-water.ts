// leetcode #42

function trap(height: number[]): number {
  // find left max array
  const arrLeft: number[] = [];
  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      arrLeft.push(height[i]);
      continue;
    }

    arrLeft.push(Math.max(arrLeft[arrLeft.length - 1], height[i]));
  }

  // find right array
  const arrRight: number[] = [];
  for (let i = height.length - 1; i >= 0; i--) {
    if (i === height.length - 1) {
      arrRight.push(height[i]);
    } else {
      arrRight.push(Math.max(arrRight[arrRight.length - 1], height[i]));
    }
  }

  let water = 0;
  for (let i = 1; i < height.length - 1; i++) {
    const leftMax = arrLeft[i];
    const rightMax = arrRight[height.length - i - 1];

    const diff = Math.min(leftMax, rightMax) - height[i];

    if (diff > 0) {
      water += diff;
    }
  }

  return water;
}