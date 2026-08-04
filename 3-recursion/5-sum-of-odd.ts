// find the sum of odd numbers in an array

function sumOfOdd(arr: number[]): number {
  const firstIndexValue = arr[0] % 2 === 0 ? 0 : arr[0];

  if (arr.length === 1) {
    return firstIndexValue;
  }

  return firstIndexValue + sumOfOdd(arr.slice(1));
}

// test cases

console.log(sumOfOdd([0]));
console.log(sumOfOdd([1]));
console.log(sumOfOdd([-1]));
console.log(sumOfOdd([1, 2, 3]));
console.log(sumOfOdd([1, 2, 3, 3]));
console.log(sumOfOdd([10, 2, 32, 4]));