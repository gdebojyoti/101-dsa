// leetcode #144

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

function preorderTraversal(root: TreeNode | null): number[] {
  const output: number[] = [];

  if (!root) {
    return output;
  }

  // get root
  output.push(root.val);

  // get left
  output.push(...preorderTraversal(root.left));

  // get right
  output.push(...preorderTraversal(root.right));

  return output;
};