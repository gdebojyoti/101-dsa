// leetcode #658

function findClosestElements(arr: number[], count: number, target: number): number[] {
  // Step 1: find the closest element first

  let closestIndex;
  let l = 0, r = arr.length - 1;

  while (l < r) {
    const m = l + Math.floor((r - l) / 2);

    if (arr[m] === target) {
      closestIndex = m;
      break;
    }

    if (r - l === 1) {
      if (Math.abs(arr[l] - target) <= Math.abs(arr[r] - target)) {
        closestIndex = l;
      } else {
        closestIndex = r;
      }

      break;
    }

    if (arr[m] < target) {
      l = m;
    } else {
      r = m;
    }
  }

  // Step 2: Find a window of count elements where target is at the end (or as far as possible)
  
  let startIndex, endIndex;

  if (count <= closestIndex) {
    startIndex = closestIndex - count + 1;
    endIndex = closestIndex;
  } else {
    // initial count elements
    startIndex = 0;
    endIndex = count - 1;
  }

  // Step 3: Keep increasing start & end indices till the difference is lowest

  while (true) {
    if (target - arr[startIndex] > arr[endIndex + 1] - target) {
      startIndex++;
      endIndex++;
    } else {
      break;
    }
  }

  return arr.slice(startIndex, endIndex + 1);
};