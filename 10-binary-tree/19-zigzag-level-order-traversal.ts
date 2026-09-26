// leetcode #103

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];
  let stack: (TreeNode | null)[] = [root];
  let isL2R = true;

  while (stack.length) {
    const nextStack: (TreeNode | null)[] = [];
    const rowData: number[] = [];
    
    while (stack.length) {
      const curr = stack.pop();
      if (!curr) {
        continue;
      }
      
      rowData.push(curr.val);
      
      if (isL2R) {
        nextStack.push(curr.left, curr.right);
      } else {
        nextStack.push(curr.right, curr.left);
      }
    }

    stack = nextStack;
    isL2R = !isL2R;
    rowData.length && answer.push(rowData);
  }

  return answer;
};