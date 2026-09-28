// leetcode #1448

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

// top down approach: first calculate, then traverse
function goodNodes(root: TreeNode): number {
  let count = 0;

  function traverse(node: TreeNode, highest: number) {
    if (node.val >= highest) {
      ++count;
    }

    const newHighest = Math.max(node.val, highest);

    // check children
    node.left && traverse(node.left, newHighest);
    node.right && traverse(node.right, newHighest);
  }

  traverse(root, root.val);

  return count;
};