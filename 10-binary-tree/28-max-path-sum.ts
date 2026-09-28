// leetcode #124

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

function maxPathSum(root: TreeNode | null): number {
  let ans = -Infinity;

  function traverse(node: TreeNode | null): number {
    // null check
    if (!node) {
      return 0;
    }

    // children
    const left = Math.max(0, traverse(node.left));
    const right = Math.max(0, traverse(node.right));

    const self = node.val;

    ans = Math.max(ans, left + right + self);

    return self + Math.max(left, right);
  }

  traverse(root);

  return ans;
};