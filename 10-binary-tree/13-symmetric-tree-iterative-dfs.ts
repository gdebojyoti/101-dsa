// leetcode #101

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

function isSymmetric(root: TreeNode): boolean {
  const s1 = [root.left];
  const s2 = [root.right];

  while (s1.length && s2.length) {
    // pop out nodes
    const n1 = s1.pop();
    const n2 = s2.pop();

    if (!n1 && !n2) {
      continue;
    }
    if (!n1 || !n2) {
      return false;
    }

    // compare values
    if (n1.val !== n2.val) {
      return false;
    }

    // push into stacks
    s1.push(n1.right, n1.left);
    s2.push(n2.left, n2.right);
  }

  return s1.length === s2.length;
};