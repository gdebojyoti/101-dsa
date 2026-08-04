function findLargestNumberInArray (arr: number[]) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// test cases

console.log(findLargestNumberInArray([3, 12, 111, 2]));
console.log(findLargestNumberInArray([2, 2, 2]));
console.log(findLargestNumberInArray([34, -233, 15]));
console.log(findLargestNumberInArray([-12, -34]));
console.log(findLargestNumberInArray([]));