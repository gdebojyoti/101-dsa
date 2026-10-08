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

  extract (): number | undefined {
    // handle corner case
    if (!this.arr.length) {
      return;
    }
    
    // save first element
    const elm = this.arr[0];

    // exchange & remove
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();

    // heapify down
    this.heapifyDown();

    return elm;
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

  private heapifyDown () {
    let parentIndex = 0;

    while (true) {
      const leftIndex = this.getLeftChildIndex(parentIndex);
      const rightIndex = this.getRightChildIndex(parentIndex);

      // exit condition
      if (leftIndex >= this.arr.length) {
        break;
      }

      const numbers = [this.arr[parentIndex], this.arr[leftIndex], this.arr[rightIndex]].filter(val => typeof val !== "undefined")

      const smallest = Math.min(...numbers);

      // stop if parent itself is smallest
      if (this.arr[parentIndex] === smallest) {
        break;
      }

      // swap with left if left is smallest
      if (this.arr[leftIndex] === smallest) {
        this.swap(parentIndex, leftIndex);
        parentIndex = leftIndex;
        continue;
      }

      // swap with right if right is smallest
      if (this.arr[rightIndex] === smallest) {
        this.swap(parentIndex, rightIndex);
        parentIndex = rightIndex;
        continue;
      }
    }
  }

  private swap (index1: number, index2: number) {
    const temp = this.arr[index2];
    this.arr[index2] = this.arr[index1];
    this.arr[index1] = temp;
  }

  output () {
    console.log(this.arr);
  }

  peek (): number {
    return this.arr[0];
  }
}

// test cases

const heap = new MinHeap([2, 3, 5, 8, 10, 9, 6, 12]);

heap.insert(4);
heap.insert(1);

heap.output();

console.log(heap.extract());
console.log(heap.extract());

console.log(heap.peek());

heap.output();