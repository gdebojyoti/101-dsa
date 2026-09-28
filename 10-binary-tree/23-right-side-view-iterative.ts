// leetcode #199

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

function rightSideView(root: TreeNode | null): number[] {
  let q: (TreeNode | null)[] = [root];
  const answer: number[] = [];

  while (q.length) {
    const nextQ: (TreeNode | null)[] = [];

    // add the last element to answer
    const lastElm = q[q.length - 1];
    lastElm && answer.push(lastElm.val);

    for (let i = 0; i < q.length; i++) {
      // identify element
      const elm = q[i];

      // null check (only required for root)
      if (!elm) {
        continue;
      }

      // add left
      elm.left && nextQ.push(elm.left);

      // add right
      elm.right && nextQ.push(elm.right);
    }

    q = nextQ;
  }

  return answer;
};