// leetcode #100

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

// recursive
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }

  return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// // iterative
// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   const s1: (TreeNode | null)[] = [p];
//   const s2: (TreeNode | null)[] = [q];

//   while (s1.length && s2.length) {
//     // pop
//     const p = s1.pop();
//     const q = s2.pop();

//     // null checks
//     if (!p && !q) {
//       continue;
//     }
//     if (!p || !q) {
//       return false;
//     }

//     if (p.val !== q.val) {
//       return false;
//     }

//     s1.push(p.left, p.right);
//     s2.push(q.left, q.right);
//   }

//   return s1.length === s2.length;
// };