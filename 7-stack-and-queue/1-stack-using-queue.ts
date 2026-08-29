// leetcode #225

class MyStack {
  private data: number[];

  constructor() {
    this.data = [];
  }

  push(x: number): void {
    this.data.push(x);
  }

  pop(): number {
    for (let i = 0; i < this.data.length - 1; i++) {
      // remove the item from the front and push it at the back
      this.data.push(this.data.shift());
    }

    return this.data.shift();
  }

  top(): number {
    for (let i = 0; i < this.data.length - 1; i++) {
      this.data.push(this.data.shift());
    }

    const value = this.data.shift();
    this.data.push(value);

    return value;
  }

  empty(): boolean {
    return this.data.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */