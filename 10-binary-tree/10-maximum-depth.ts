// leetcode #104

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

// bottom up approach
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};

// // top down approach
// function maxDepth(root: TreeNode | null): number {
//   let maxDepth = 0;

//   function traverse (node: TreeNode | null, depth: number) {
//     if (!node) {
//       return;
//     }

//     maxDepth = Math.max(maxDepth, depth);

//     traverse(node.left, depth + 1);
//     traverse(node.right, depth + 1);
//   }

//   traverse(root, 1);

//   return maxDepth;
// };