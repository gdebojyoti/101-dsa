// leetcode #701

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

function insertIntoBST(node: TreeNode | null, val: number): TreeNode | null {
  if (!node) {
    return new TreeNode(val);
  }

  if (val < node.val) {
    node.left = insertIntoBST(node.left, val);
  } else {
    node.right = insertIntoBST(node.right, val);
  }

  return node;
};

// function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
//   const newNode = new TreeNode(val);

//   if (!root) {
//     return newNode;
//   }
  
//   function updateTree (node: TreeNode) {
//     if (val > node.val) {
//       // check right
//       if (node.right) {
//         updateTree(node.right);
//       } else {
//         node.right = newNode;
//       }
//     } else {
//       // check left
//       if (node.left) {
//         updateTree(node.left);
//       } else {
//         node.left = newNode;
//       }
//     }
//   }

//   updateTree(root);

//   return root;
// };