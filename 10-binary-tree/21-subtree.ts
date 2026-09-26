// leetcode #572

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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function serializeTree(node: TreeNode | null, saveToMap: boolean): string {
    if (!node) {
      return "x";
    }

    // get children
    const left = serializeTree(node.left, saveToMap);
    const right = serializeTree(node.right, saveToMap);

    return `${node.val}-${left}-${right}`;
  }

  // NOTE: "-" is also added at the end to avoid [12] & [2] from matching
  const mapRoot = `-${serializeTree(root, true)}-`;
  const mapSubRoot = `-${serializeTree(subRoot, false)}-`;

  return mapRoot.indexOf(mapSubRoot) > -1;
};

// // brute force approach
// function isSubtree(root: TreeNode, subRoot: TreeNode): boolean {
//   function checkForMatch(n1: TreeNode | null, n2: TreeNode | null): boolean {
//     if (!n1 && !n2) {
//       return true;
//     }

//     if (!n1 || !n2) {
//       return false;
//     }

//     if (n1.val !== n2.val) {
//       return false;
//     }

//     return checkForMatch(n1.left, n2.left) && checkForMatch(n1.right, n2.right);
//   }

//   function traverse(node: TreeNode | null): boolean {
//     if (!node) {
//       return false;
//     }

//     if (node.val === subRoot.val) {
//       const isSame = checkForMatch(node, subRoot);
//       if (isSame) {
//         return true;
//       }
//     }

//     return traverse(node.left) || traverse(node.right);
//   }

//   return traverse(root);
// };