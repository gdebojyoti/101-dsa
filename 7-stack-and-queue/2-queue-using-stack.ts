// leetcode #232

class MyQueue {
  private s1: number[];
  private s2: number[];
  
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x: number): void {
    this.s1.push(x);
  }

  pop(): number {
    if (!this.s2.length) {
      while (this.s1.length)
        this.s2.push(this.s1.pop());
    }

    return this.s2.pop();
  }

  peek(): number {
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2[this.s2.length - 1];
  }

  empty(): boolean {
    return !this.s1.length && !this.s2.length;
  }
}

// class MyQueue {
//   private data: number[];
//   private stack: number[];

//   constructor() {
//     this.data = [];
//     this.stack = [];
//   }

//   push(x: number): void {
//     this.data.push(x);
//   }

//   pop(): number {
//     while (this.data.length > 1) {
//       this.stack.push(this.data.pop());
//     }

//     const popped = this.data.pop();

//     while (this.stack.length > 0) {
//       this.data.push(this.stack.pop());
//     }

//     return popped;
//   }

//   peek(): number {
//     while (this.data.length > 1) {
//       this.stack.push(this.data.pop());
//     }

//     const firstElm = this.data.pop();
//     this.data.push(firstElm);

//     while (this.stack.length > 0) {
//       this.data.push(this.stack.pop());
//     }

//     return firstElm;
//   }

//   empty(): boolean {
//     return this.data.length === 0;
//   }
// }

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */