function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const sortedArr: number[] = [];

  let i = 0, j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || j >= arr2.length) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  return sortedArr;
}

// test cases

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6, 8]));
console.log(mergeSortedArrays([1, 3, 5], [1, 2, 3, 4, 6, 8]));
console.log(mergeSortedArrays([], []));
console.log(mergeSortedArrays([1, 2], []));
console.log(mergeSortedArrays([], [1, 2]));
console.log(mergeSortedArrays([1], []));
console.log(mergeSortedArrays([], [1]));
console.log(mergeSortedArrays([1], [2]));
console.log(mergeSortedArrays([2], [1]));