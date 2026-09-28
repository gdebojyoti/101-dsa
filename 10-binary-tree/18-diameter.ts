// leetcode #543

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function traverse(node: TreeNode | null): number {
    // null check
    if (!node) {
      return 0;
    }

    const leftHeight = traverse(node.left);
    const rightHeight = traverse(node.right);

    diameter = Math.max(diameter, leftHeight + rightHeight);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  traverse(root);

  return diameter;
};