// INSERT the next element into the initial sorted sub-array

function insertionSort (arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let selectedNumber = arr[i];

    // insert selectedNumber to the proper place in the sorted sub-array
    for (let j = i - 1; j >= 0; j--) {
      // swap if selectedNumber is less than jth element
      if (selectedNumber < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = selectedNumber;
        continue;
      }

      // else break this for loop
      break;
    }
  }

  return arr;
}

// test cases

console.log(insertionSort([]));
console.log(insertionSort([2]));
console.log(insertionSort([1, 3]));
console.log(insertionSort([3, 1]));
console.log(insertionSort([1, 2, 3]));
console.log(insertionSort([3, 2, 1]));
console.log(insertionSort([1, 6, 3, 8, 3]));