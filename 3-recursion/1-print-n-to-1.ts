function printNumbers (n: number): void {
  console.log(n);

  if (n <= 1) {
    return;
  }

  printNumbers(n - 1);
}

// test cases

printNumbers(3);