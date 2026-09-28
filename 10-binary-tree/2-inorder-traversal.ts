// leetcode #94

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

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null) {
    // exit condtion
    if (!node) {
      return;
    }

    // left
    traverse(node.left);

    // root
    result.push(node.val)

    // right
    traverse(node.right);
  }

  traverse(root);

  return result;
};