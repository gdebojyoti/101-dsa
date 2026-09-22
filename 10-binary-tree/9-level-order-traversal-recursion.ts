// leetcode #102

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

function levelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];

  function traverse (node: TreeNode | null, index: number) {
    if (!node) {
      return;
    }

    if (!answer[index]) {
      answer[index] = [];
    }
    answer[index].push(node.val);

    traverse(node.left, index + 1);
    traverse(node.right, index + 1);
  }

  traverse(root, 0);

  return answer;
};

// function levelOrder(root: TreeNode | null): number[][] {
//   const answer: number[][] = [];

//   function traverse (arr: (TreeNode | null)[]) {
//     const level = [];
//     const children = [];
    
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       if (element) {
//         level.push(element.val);

//         element.left && children.push(element.left);
//         element.right && children.push(element.right);
//       }
//     }

//     if (level.length) {
//       answer.push(level);
//     }

//     if (children.length) {
//       traverse(children);
//     }
//   }

//   traverse([root]);

//   return answer;
// };