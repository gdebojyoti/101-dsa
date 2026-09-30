// leetcode #98

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

function isValidBST(node: TreeNode | null, lowerLimit: number = -Infinity, upperLimit: number = Infinity): boolean {
  if (!node) {
    return true;
  }

  // check self; it should always lie between LL & UL
  if (node.val <= lowerLimit || node.val >= upperLimit) {
    return false;
  }

  // children
  return isValidBST(node.left, lowerLimit, node.val) && isValidBST(node.right, node.val, upperLimit);
};

// // inorder traversal: resulting numbers should be sorted in ascending order
// function isValidBST(root: TreeNode | null): boolean {
//   let isValid = true;
//   let lastValue = -Infinity;

//   function traverse(node: TreeNode | null) {
//     // null check
//     if (!node) {
//       return;
//     }

//     // go left
//     traverse(node.left);

//     // check self
//     if (node.val <= lastValue) { // values should always be in ascending order; violation = invalid BST
//       isValid = false;
//       return;
//     }
//     lastValue = node.val;

//     // go right
//     traverse(node.right);
//   }

//   traverse(root);

//   return isValid;
// };