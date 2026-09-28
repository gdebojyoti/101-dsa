// leetcode #116

class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  next: _Node | null
  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = (next===undefined ? null : next)
  }
}

function connect(root: _Node | null): _Node | null {
  let q = [root];

  while (q.length) {
    let nextQ = [];

    for (let i = 0; i < q.length; i++) {
      const curr = q[i];

      // null check
      if (!curr) {
        continue;
      }

      // update next pointer
      if (q[i + 1]) {
        curr.next = q[i + 1];
      }

      // update next queue
      nextQ.push(curr.left, curr.right);
    }

    q = nextQ;
  }

  return root;
};