// leetcode #199

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

function rightSideView(root: TreeNode | null): number[] {
  const rows: number[][] = [];

  function traverse(node: TreeNode | null, level: number) {
    if (!node) {
      return;
    }

    if (!rows[level]) {
      rows[level] = [];
    }

    rows[level].push(node.val);

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);

  return rows.map(arr => arr[arr.length - 1]);
};