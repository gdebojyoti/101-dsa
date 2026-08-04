function sumOfN(n: number): number {
  if (n === 0) {
    return 0;
  }

  return n + sumOfN(n - 1);
}

// test cases

console.log(sumOfN(0));
console.log(sumOfN(1));
console.log(sumOfN(4));