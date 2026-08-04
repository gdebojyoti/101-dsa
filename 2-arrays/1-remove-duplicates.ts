function removeDuplicates (arr: number[]) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!i || (arr[i] !== arr[count])) {
      count++;
      arr[count] = arr[i];
    }
  }

  return count;
}

// test cases

// const nums = [1, 2];
const nums = [1, 2, 2, 6, 7, 7, 7, 9, 11, 22, 23, 35, 35, 35, 35, 35, 87];
console.log(removeDuplicates(nums), nums);