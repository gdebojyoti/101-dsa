function heapSort (heap: number[]): number[] {
  // 1. create max heap; first element is highest
  // NOTE: this process takes advantage of the fact that subtrees of a max heap are also max heaps
  for (let i = heap.length - 1; i >= 0; i--) {
    heapifyDown(i, heap.length);
  }

  for (let i = 0; i < heap.length; i++) {
    // 2. swap first & last elements
    [heap[0], heap[heap.length - 1 - i]] = [heap[heap.length - 1 - i], heap[0]];

    // 3. heapify down
    heapifyDown(0, heap.length - 1 - i);
  }

  // NOTE: this works only on an existing max heap; i.e., parent nodes >= children nodes
  function heapifyDown (currIndex: number, limitIndex: number) {
    // keep looping till element goes as low as it can
    while (true) {
      // calculate left & right child indices
      const lcIndex = 2 * currIndex + 1;
      const rcIndex = 2 * currIndex + 2;

      const triad = [heap[currIndex]];
      lcIndex < limitIndex && triad.push(heap[lcIndex]);
      rcIndex < limitIndex && triad.push(heap[rcIndex]);

      const max = Math.max(...triad); // identify max of parent, left child, right child

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