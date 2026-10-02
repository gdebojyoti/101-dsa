// leetcode #235

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

function lowestCommonAncestor(node: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
	if (p.val < node.val && q.val < node.val) {
    // go left
    return lowestCommonAncestor(node.left!, p, q);
  } else if (node.val < p.val && node.val < q.val) {
    // go right
    return lowestCommonAncestor(node.right!, p, q);
  } else {
    // either one of p,q is node itself; or they lie on different sides
    return node;
  }
};

// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
// 	const sm = p.val < q.val ? p.val : q.val;
// 	const lg = p.val > q.val ? p.val : q.val;

//   let ans: TreeNode | null = null;

//   function traverse(node: TreeNode | null, sm: number, lg: number) {
//     // exit check
//     if (!node || ans) {
//       return;
//     }

//     if (node.val === sm || node.val === lg) {
//       ans = node;
//       return;
//     }

//     if (sm < node.val && node.val < lg) {
//       ans = node;
//       return;
//     }

//     if (lg < node.val) {
//       traverse(node.left, sm, lg);
//     }
//     if (node.val < sm) {
//       traverse(node.right, sm, lg);
//     }
//   }

//   traverse(root, sm, lg);

//   return ans;
// };

// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
//   let ans: TreeNode | null = null;

//   function traverse(node: TreeNode | null, n1: number, n2: number): number {
//     // null check
//     if (!node) {
//       return 0;
//     }

//     let count = 0;

//     // check self
//     if (node.val === n1 || node.val === n2) {
//       ++count;
//     }

//     if (n1 < node.val || n2 < node.val) {
//       count += traverse(node.left, n1, n2);
//     }
//     if (n1 > node.val || n2 > node.val) {
//       count += traverse(node.right, n1, n2);
//     }

//     if (!ans && count === 2) {
//       ans = node;
//     }

//     return count;
//   }

//   traverse(root, p.val, q.val);

//   return ans;
// };