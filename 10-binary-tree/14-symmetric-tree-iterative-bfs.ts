// leetcode #101

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function isSymmetric(root: TreeNode): boolean {
  const q = [root.left, root.right];

  // get the first 2 elements; compare them; repeat
  while (q.length) {
    // NOTE: a stack can also be used; so the last 2 elements will be popped out instead; this will probably result in better performance
    // get first 2 elms
    const n1 = q.shift();
    const n2 = q.shift();

    // null checks
    if (!n1 && !n2) {
      continue;
    }
    if (!n1 || !n2) {
      return false;
    }

    // compare values
    if (n1.val !== n2.val) {
      return false;
    }

    q.push(n1.left, n2.right, n1.right, n2.left);
  }

  return true;
};