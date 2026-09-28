// leetcode #145

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

function postorderTraversal(root: TreeNode | null): number[] {
  const stack: (TreeNode | null)[] = [];
  const answer: number[] = [];
  let mostRecent: TreeNode | null = null; // the most recent node who value has been added to the answer array

  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    // check the top-most from stack
    const peek = stack[stack.length - 1];
    if (peek) {
      if (peek.right && peek.right !== mostRecent) {
        curr = peek.right;
      } else {
        answer.push(peek.val);
        mostRecent = stack.pop();
      }
    }
  }

  return answer;
};

// function postorderTraversal(root: TreeNode | null): number[] {
//   const stack: (TreeNode | null)[] = [];
//   const answer: TreeNode[] = [];

//   let curr = root;

//   while (curr || stack.length) {
//     while (curr) {
//       stack.push(curr);
//       curr = curr.left;
//     }

//     // check the top-most from stack
//     const peek = stack[stack.length - 1];
//     if (peek) {
//       if (peek.right && peek.right !== answer[answer.length - 1]) {
//         curr = peek.right;
//       } else {
//         answer.push(peek);
//         stack.pop();
//       }
//     }
//   }

//   return answer.map(node => node.val);
// };