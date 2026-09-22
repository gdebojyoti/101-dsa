// leetcode #112

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
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  const left = hasPathSum(root.left, targetSum - root.val);
  const right = hasPathSum(root.right, targetSum - root.val);

  return left || right;
};

// // top down approach
// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   let hasPathSum = false;

//   function traverse(node: TreeNode | null, previousSum: number) {
//     if (!node) {
//       return;
//     }

//     const currentSum = previousSum + node.val;

//     if (!node.left && !node.right && currentSum === targetSum) {
//       hasPathSum = true;
//       return;
//     }

//     traverse(node.left, currentSum);
//     traverse(node.right, currentSum);
//   }

//   traverse(root, 0);

//   return hasPathSum;
// };