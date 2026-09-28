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
  function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    const check1 = isMirror(left.left, right.right);
    const check2 = isMirror(left.right, right.left);

    return check1 && check2;
  }

  return isMirror(root.left, root.right);
};