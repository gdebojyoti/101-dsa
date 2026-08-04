function reverseNumber (n: number) {
  const isNegative = n < 0;
  let reverse = 0;
  n = Math.abs(n);

  while (n > 0) {
    reverse = reverse * 10 + n % 10;
    n = Math.floor(n / 10);
  }

  return isNegative ? -reverse : reverse;
}

// test cases

console.log(reverseNumber(0));
console.log(reverseNumber(123));
console.log(reverseNumber(-123));