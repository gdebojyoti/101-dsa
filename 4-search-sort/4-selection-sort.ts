// SELECT the minimum number each time and send it to the initial index

function selectionSort (arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // swap if needed
    if (minIndex !== i) {
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

// test cases

console.log(selectionSort([]));
console.log(selectionSort([2]));
console.log(selectionSort([1, 3]));
console.log(selectionSort([3, 1]));
console.log(selectionSort([1, 2, 3]));
console.log(selectionSort([3, 2, 1]));
console.log(selectionSort([1, 6, 3, 8, 3]));