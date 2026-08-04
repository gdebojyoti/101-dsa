function sumOfArrayElements (arr: number[]): number {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumOfArrayElements(arr.slice(1));
}

// test cases

console.log(sumOfArrayElements([-1]));
console.log(sumOfArrayElements([0]));
console.log(sumOfArrayElements([1]));
console.log(sumOfArrayElements([1, 4, 5]));
console.log(sumOfArrayElements([1, 4, 5, -11]));