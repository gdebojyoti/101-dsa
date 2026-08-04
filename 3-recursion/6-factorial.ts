function factorial (n: number): number {
  if (n === 1) return 1;

  return n * factorial (n - 1);
}

// test cases

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));