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
  const queue = [root];
  const answer = [];

  while (queue.length) {
    const level = [];
    const itemCount = queue.length;

    for (let i = 0; i < itemCount; i++) {
      const curr = queue.shift();

      if (curr) {
        level.push(curr.val);
        
        curr.left && queue.push(curr.left);
        curr.right && queue.push(curr.right);
      }
    }

    level.length && answer.push(level);
  }

  return answer;
};

// function levelOrder(root: TreeNode | null): number[][] {
//   const queue = [root];
//   const answer = [];
  
//   let level = [];

//   let currentCount = 1; // remaining items in current level
//   let nextCount = 0; // total items in next level

//   while (queue.length) {
//     // shift first element
//     const element = queue.shift();

//     if (element) {
//       // add it to answer
//       level.push(element.val);

//       currentCount--;

//       // push children into queue
//       if (element.left) {
//         queue.push(element.left);
//         nextCount++;
//       }
//       if (element.right) {
//         queue.push(element.right);
//         nextCount++;
//       }
//     }

//     // if current count is exhausted
//     if (currentCount === 0) {
//       // push level & reset
//       answer.push(level);
//       level = [];

//       // swap counts
//       currentCount = nextCount;
//       nextCount = 0;
//     }
//   }

//   return answer;
// };