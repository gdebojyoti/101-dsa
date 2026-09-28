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
  if (!root) {
    return root;
  }

  if (!root.left) {
    return root;
  }

  root.left.next = root.right;

  if (root.next) {
    root.right!.next = root.next.left; // root.right will always exist of root.left does; since this is a perfect BT
  }

  connect(root.left);
  connect(root.right);

  return root;
};