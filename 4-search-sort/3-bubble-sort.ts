// The largest number BUBBLES up to the last index every time

function bubbleSort (nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let hasSwapped = false;

    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j+1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        
        hasSwapped = true;
      }
    }

    if (!hasSwapped) {
      break;
    }
  }

  return nums;
}

// test cases

console.log(bubbleSort([]));
console.log(bubbleSort([2]));
console.log(bubbleSort([1, 3]));
console.log(bubbleSort([3, 1]));
console.log(bubbleSort([1, 2, 3]));
console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([1, 6, 3, 8, 3]));