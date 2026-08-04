function linearSearch (arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// test cases

console.log(linearSearch([], 2));
console.log(linearSearch([2, 4, 5], 4));
console.log(linearSearch([2, 4, 5, 2], 2));
console.log(linearSearch([2, 4, 5], 12));