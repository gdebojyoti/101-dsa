function countNegativeNumbersInArray (arr: number[]) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  
  return count;
}

// test cases

console.log(countNegativeNumbersInArray([1, 2, 3]));
console.log(countNegativeNumbersInArray([-1, -2, -3]));
console.log(countNegativeNumbersInArray([1, -2, 3]));
console.log(countNegativeNumbersInArray([]));