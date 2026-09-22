// leetcode #144

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

function preorderTraversal(root: TreeNode | null): number[] {
  // root -> left -> right

  const answer: number[] = [];
  const stack: (TreeNode | null)[] = [root];

  while (stack.length) {
    // pop element from stack
    const top = stack.pop();

    if (top) {
      // save root in answer
      answer.push(top.val);

      // push right element into stack
      stack.push(top.right);

      // push left element into stack
      stack.push(top.left);
    }
  }

  return answer;
};