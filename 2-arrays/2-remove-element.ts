function removeElementFromArray (arr: number[], val: number) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[count] = arr[i];
      count++;
    }
  }

  return count;
}

// test cases

// const nums = [1, 2];
const nums = [1, 2, 2, 6, 7, 7, 7, 9, 11, 22, 23, 35, 35, 35, 35, 35, 87];
console.log(removeElementFromArray(nums, 2), nums);