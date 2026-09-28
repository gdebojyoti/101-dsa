// leetcode #94

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

function inorderTraversal(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  const answer: number[] = [];

  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    if (stack.length) {
      const popped = stack.pop();
      answer.push(popped.val);

      curr = popped.right;
    }
  }

  return answer;
};