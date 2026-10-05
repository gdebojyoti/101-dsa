class MinHeap {
  private arr: number[];
  
  constructor (arr: number[]) {
    this.arr = arr;
  }

  getLeftChildIndex (n: number) {
    return 2 * n + 1;
  }

  getRightChildIndex (n: number) {
    return 2 * n + 2;
  }

  getParent (n: number) {
    return Math.floor((n - 1) / 2);
  }

  insert (n: number) {
    // add it to end of array
    this.arr.push(n); // T = O(1)

    // heapify up
    this.heapifyUp(); // T = O(log n)
  }

  private heapifyUp () {
    // determine child & parent indices
    let child = this.arr.length - 1;
    let parent = this.getParent(child);

    // loop
    while (this.arr[parent] > this.arr[child]) {
      // swap
      const temp = this.arr[child];
      this.arr[child] = this.arr[parent];
      this.arr[parent] = temp;

      // update indices
      child = parent;
      parent = this.getParent(child);
    }
  }

  output () {
    console.log(this.arr);
  }
}

// test cases

const heap = new MinHeap([2, 3, 5, 8, 10, 9, 6, 12]);

heap.insert(4);
heap.insert(1);

heap.output();