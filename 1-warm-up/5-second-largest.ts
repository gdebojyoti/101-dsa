function findSecondLargestInArray (arr: number[]) {
  if (arr.length < 2) {
    return "Length of array needs to be at least 2";
  }
  
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (secondLargest >= arr[i]) {
      continue;
    }

    if (arr[i] >= largest) {
      secondLargest = largest;
      largest = arr[i];
      continue;
    }

    secondLargest = arr[i];
  }

  return secondLargest;
}

// test cases

console.log(findSecondLargestInArray([999, 12, 56, 34, -100, 100]));
console.log(findSecondLargestInArray([12, 56, 34, -100, 100]));
console.log(findSecondLargestInArray([1, 4, 3, 8, 8, 12])); // duplicates
console.log(findSecondLargestInArray([1, 4, 3, 8, 8, -12]));
console.log(findSecondLargestInArray([-1, -4, -3, -8, -8, -12])); // all negative
console.log(findSecondLargestInArray([45]));
console.log(findSecondLargestInArray([]));