// leetcode #145

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

function postorderTraversal(root: TreeNode | null): number[] {
  const s1: (TreeNode | null)[] = [root];
  const s2: number[] = [];

  while (s1.length) {
    const curr = s1.pop();
    if (curr) {
      s2.push(curr.val);

      curr.left && s1.push(curr.left);
      curr.right && s1.push(curr.right);
    }
  }

  return s2.reverse();
};