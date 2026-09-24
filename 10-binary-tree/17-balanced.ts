// leetcode #110

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

function isBalanced(root: TreeNode | null): boolean {
  let isBalanced = true;

  function traverse(node: TreeNode | null): number {
    // null check
    if (!node) {
      return 0;
    }

    // calculate heights
    const leftHeight = traverse(node.left);
    const rightHeight = traverse(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      isBalanced = false;
    }

    return Math.max(leftHeight, rightHeight) + 1;
  }

  traverse(root);

  return isBalanced;
};