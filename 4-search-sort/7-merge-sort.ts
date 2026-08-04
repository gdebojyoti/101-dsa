// leetcode #912
// Divide & conquer; split array into sub-arrays, then MERGE the SORTED sub-arrays on the way back up

function mergeSort(arr: number[]): number[] {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // split into 2
  const mid = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, mid);
  const arr2 = arr.slice(mid);

  // combine with recursion
  return mergeSortedArrays(mergeSort(arr1), mergeSort(arr2));
}

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

console.log(mergeSort([4, 1, 8, 5, 0, 6, 2, 9]));