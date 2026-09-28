// leetcode #236

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
	let answer: TreeNode | null = null;

  function traverse(node: TreeNode | null): number {
    // null check
    if (!node) {
      return 0;
    }

    // check left
    const left = traverse(node.left);

    // check right
    const right = traverse(node.right);

    let total = left + right;
    if (node.val === p.val || node.val === q.val) {
      ++total;
    }

    // each match will occur only once; hence we can rely on the total being exactly 2 when both have been found
    if (total === 2 && !answer) {
      answer = node;
    }

    return total;
  }

  traverse(root);

  return answer;
};