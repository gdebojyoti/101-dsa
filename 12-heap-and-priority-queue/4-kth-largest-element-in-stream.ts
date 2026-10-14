// leetcode #703

class KthLargest {
  minHeap: number[] = [];
  limit: number = 0;

  constructor(k: number, nums: number[]) {
    this.limit = k;

    for (let i = 0; i < nums.length; i++) {
      this.add(nums[i]);
    }
  }

  add(val: number): number {
    if (this.minHeap.length < this.limit) {
      this.minHeap.push(val);
      this.heapifyUp(this.minHeap.length - 1);
    } else {
      // NOTE: val gets ignored if it's lesser than 0th item in min-heap
      
      if (this.minHeap[0] < val) {
        this.minHeap[0] = val;
        this.heapifyDown(0);
      }
    }

    return this.minHeap[0];
  }

  private getParentIndex (n: number) {
    return Math.ceil(n / 2) - 1;
  }

  private getLeftChildIndex (n: number) {
    return n * 2 + 1;
  }

  private getRightChildIndex (n: number) {
    return n * 2 + 2;
  }

  private heapifyDown(index: number) {
    const left = this.getLeftChildIndex(index);
    const right = this.getRightChildIndex(index);

    let smallestIndex = index;

    if (this.minHeap[left] < this.minHeap[smallestIndex]) {
      smallestIndex = left;
    }
    if (this.minHeap[right] < this.minHeap[smallestIndex]) {
      smallestIndex = right;
    }

    if (smallestIndex !== index) {
      [this.minHeap[index], this.minHeap[smallestIndex]] = [this.minHeap[smallestIndex], this.minHeap[index]];
      this.heapifyDown(smallestIndex);
    }
  }

  private heapifyUp(index: number) {
    // exit if 0
    if (!index) {
      return;
    }
    
    const parentIndex = this.getParentIndex(index);

    // exit if already min-heap
    if (this.minHeap[parentIndex] <= this.minHeap[index]) {
      return;
    }

    [this.minHeap[index], this.minHeap[parentIndex]] = [this.minHeap[parentIndex], this.minHeap[index]];

    this.heapifyUp(parentIndex);
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */