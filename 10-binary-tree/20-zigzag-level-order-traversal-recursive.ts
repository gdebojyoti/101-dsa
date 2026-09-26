// leetcode #103

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];

  function traverse(node: TreeNode | null, level: number) {
    if (!node) {
      return;
    }

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);

    if (!answer[level]) {
      answer[level] = [];
    }

    if (level % 2 === 0) {
      answer[level].push(node.val);
    } else {
      answer[level].unshift(node.val);
    }
  }

  traverse(root, 0);

  return answer;
};