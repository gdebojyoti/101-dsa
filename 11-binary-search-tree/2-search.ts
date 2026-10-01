// leetcode #700

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

// top down approach
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let answer: TreeNode | null = null;

  function traverse(node: TreeNode | null) {
    if (!node) {
      return;
    }

    if (node.val === val) {
      answer = node;
      return;
    }

    if (val > node.val) {
      traverse(node.right);
    } else {
      traverse(node.left);
    }
  }

  traverse(root);

  return answer;
};

// // bottom up approach
// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (!root) {
//     return null;
//   }

//   if (root.val === val) {
//     return root;
//   }

//   return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
// };