// leetcode #994

function orangesRotting(grid: number[][]): number {
  // init
  let stack: number[][] = []; // stack of newly rotten items
  let counter = 0; // final answer

  const rowCount = grid.length, colCount = grid[0].length;
  let freshCount = 0;

  // first pass: shove all rotten oranges into stack, and count number of fresh oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        freshCount++;
      }
      if (grid[i][j] === 2) {
        stack.push([i, j]);
      }
    }
  }

  // return 0 if no fresh oranges exist
  if (!freshCount) {
    return 0;
  }

  // return -1 if no rotten oranges exist
  if (!stack.length) {
    return -1;
  }

  let rottenCount = 0;

  while (stack.length) {
    // array to store new rotten oranges in this iteration
    const temp = [];

    // for each item in stack
    for (let i = 0; i < stack.length; i++) {
      const [rowId, colId] = stack[i]; // [rowId, colId]
      
      // get the 4 neighbours
      const left = [rowId, colId - 1];
      const right = [rowId, colId + 1];
      const top = [rowId - 1, colId];
      const bottom = [rowId + 1, colId];

      // if neighbour is fresh: update it as rotten; add it to temp; increment rotten count

      if (grid[left[0]][left[1]] === 1) {
        temp.push(left);
        grid[left[0]][left[1]] = 2;
        rottenCount++;
      }
      
      if (grid[right[0]][right[1]] === 1) {
        temp.push(right);
        grid[right[0]][right[1]] = 2;
        rottenCount++;
      }

      if (top[0] >= 0 && grid[top[0]][top[1]] === 1) {
        temp.push(top);
        grid[top[0]][top[1]] = 2;
        rottenCount++;
      }

      if (bottom[0] < rowCount && grid[bottom[0]][bottom[1]] === 1) {
        temp.push(bottom);
        grid[bottom[0]][bottom[1]] = 2;
        rottenCount++;
      }
    }

    // replace stack with new set of rotten oranges
    stack = temp;

    // update counter
    counter++;
  }

  // if not all fresh oranges are rotten
  if (freshCount !== rottenCount) {
    return -1;
  }

  return counter - 1; // 1 is subtracted since the while loop runs 1 extra time for the very last elements that are added to the stack
};