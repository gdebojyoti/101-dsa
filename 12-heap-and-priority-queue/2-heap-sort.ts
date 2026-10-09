function heapSort (nums: number[]): number[] {
  const heap: number[] = [];
  
  // 1. create max heap; first element is highest
  for (let i = 0; i < nums.length; i++) {
    heap.push(nums[i]);
    
    let currIndex = heap.length - 1;
    
    // keep looping till element goes as high as it can
    while (true) {
      const parentIndex = Math.floor((currIndex - 1) / 2);
      
      // swap if current > parent; then reiterate
      if (heap[currIndex] > heap[parentIndex]) {
        // swap
        [heap[currIndex], heap[parentIndex]] = [heap[parentIndex], heap[currIndex]];

        // update current index
        currIndex = parentIndex;

        // reiterate
        continue;
      }
      
      break;
    }
  }

  for (let i = 0; i < heap.length; i++) {
    // 2. swap first & last elements
    [heap[0], heap[heap.length - 1 - i]] = [heap[heap.length - 1 - i], heap[0]];

    // 3. heapify down
    let currIndex = 0;
    const limitIndex = heap.length - 1 - i;

    // keep looping till element goes as low as it can
    while (true) {
      // calculate left & right child indices
      const lcIndex = 2 * currIndex + 1;
      const rcIndex = 2 * currIndex + 2;

      const triad = [heap[currIndex]];
      lcIndex < limitIndex && triad.push(heap[lcIndex]);
      rcIndex < limitIndex && triad.push(heap[rcIndex]);

      const max = Math.max(...triad);

      // break if current is already highest
      if (heap[currIndex] === max) {
        break;
      }
      
      // check if left is max
      if (heap[lcIndex] === max) {
        // swap
        [heap[currIndex], heap[lcIndex]] = [heap[lcIndex], heap[currIndex]];
        // update index
        currIndex = lcIndex
        
        continue;
      }

      // swap with right
      [heap[currIndex], heap[rcIndex]] = [heap[rcIndex], heap[currIndex]];
      // update index
      currIndex = rcIndex
    }
  }

  return heap;
}

// test cases

// const arr = [];
// const arr = [12, 999999, 0, -23, -99999, -2323, 34, 34345, 21, 89, 238, 78865, 122, 8979776, 23345];
const arr = [4, 10, 5, 3, 1];
console.log(heapSort(arr));