function findElementInArray (arr: number[], element: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }

  return -1;
}

// test cases

const arr = [-23, 2, -100, 44, 21];
console.log(findElementInArray(arr, 100));
console.log(findElementInArray(arr, -23));
console.log(findElementInArray(arr, 21));
console.log(findElementInArray(arr, -100));