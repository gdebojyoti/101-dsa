// leetcode #230

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

function kthSmallest(root: TreeNode | null, k: number): number {
  let counted = 0;
  let ans = 0;

  function traverse(node: TreeNode | null) {
    // null check
    if (!node) {
      return;
    }

    // go left
    traverse(node.left);

    // check self
    ++counted;
    if (counted === k) {
      ans = node.val;
      return;
    }

    // go right
    traverse(node.right);
  }

  traverse(root);

  return ans;
};