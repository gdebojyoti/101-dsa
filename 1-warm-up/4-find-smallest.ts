function findSmallestNumberInArray (arr: number[]) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

// test cases

console.log(findSmallestNumberInArray([3, 12, 111, 2]));
console.log(findSmallestNumberInArray([2, 2, 2]));
console.log(findSmallestNumberInArray([34, -233, 15]));
console.log(findSmallestNumberInArray([-12, -34]));
console.log(findSmallestNumberInArray([]));