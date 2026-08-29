// leetcode #155

class MinStack {
  private data: number[];
  private min: number[];

  constructor() {
    this.data = [];
    this.min = [];
  }

  push(value: number): void {
    this.data.push(value);
    this.min.push(this.data.length === 1 ? value : Math.min(this.min[this.min.length - 1], value));
  }

  pop(): void {
    this.min.pop();
    this.data.pop();
  }

  top(): number {
    return this.data[this.data.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */