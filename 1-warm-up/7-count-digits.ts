// count the number of digits a number has

function countDigits (n: number) {
  let count = 1;
  n = Math.abs(n);

  while (n > 9) {
    count++;
    n = Math.floor(n / 10);
  }

  return count;
}

// test cases

console.log(countDigits(0));
console.log(countDigits(2));
console.log(countDigits(-2));
console.log(countDigits(9));
console.log(countDigits(-9));
console.log(countDigits(10));
console.log(countDigits(-10));
console.log(countDigits(11));
console.log(countDigits(-11));
console.log(countDigits(254));
console.log(countDigits(-254));
console.log(countDigits(92954));
console.log(countDigits(-92954));