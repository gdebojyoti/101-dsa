function heapSort (nums: number[]): number[] {
  // 1. create max heap; first element is highest
  // NOTE: this process takes advantage of the fact that subtrees of a max heap are also max heaps
  for (let i = nums.length - 1; i >= 0; i--) {
    heapifyDown(i, nums.length);
  }

  console.log("max heap:", nums);

  for (let i = 0; i < nums.length; i++) {
    // 2. swap first & last elements
    [nums[0], nums[nums.length - 1 - i]] = [nums[nums.length - 1 - i], nums[0]];

    // 3. heapify down
    heapifyDown(0, nums.length - 1 - i);
  }

  // NOTE: this works only on an existing max heap; i.e., parent nodes >= children nodes
  function heapifyDown (currIndex: number, limitIndex: number) {
    // keep looping till element goes as low as it can
    while (true) {
      // calculate left & right child indices
      const lcIndex = 2 * currIndex + 1;
      const rcIndex = 2 * currIndex + 2;

      const triad = [nums[currIndex]];
      lcIndex < limitIndex && triad.push(nums[lcIndex]);
      rcIndex < limitIndex && triad.push(nums[rcIndex]);

      const max = Math.max(...triad); // identify max of parent, left child, right child

      // break if current is already highest
      if (nums[currIndex] === max) {
        break;
      }
      
      // check if left is max
      if (nums[lcIndex] === max) {
        // swap
        [nums[currIndex], nums[lcIndex]] = [nums[lcIndex], nums[currIndex]];
        // update index
        currIndex = lcIndex
        
        continue;
      }

      // swap with right
      [nums[currIndex], nums[rcIndex]] = [nums[rcIndex], nums[currIndex]];
      // update index
      currIndex = rcIndex
    }
  }

  return nums;
}

// test cases

// const arr: number[] = [];
const arr = [12, 999999, 0, -23, -99999, -2323, 34, 34345, 21, 89, 238, 78865, 122, 8979776, 23345];
// const arr = [4, 10, 5, 3, 1];
// const arr = [2, 11, 10, 9, 8, 7, 6]
console.log(heapSort(arr));