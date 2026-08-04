function checkIfPalindrome (n: number) {
  let reverse = 0;
  let input = n;

  while (n > 0) {
    reverse = reverse * 10 + n % 10;
    n = Math.floor(n / 10);
  }

  return reverse === input;
}

// test cases

console.log(checkIfPalindrome(0));
console.log(checkIfPalindrome(12345));
console.log(checkIfPalindrome(121));
console.log(checkIfPalindrome(-121)); // false; reverse is "121-"
console.log(checkIfPalindrome(99));
console.log(checkIfPalindrome(98));
console.log(checkIfPalindrome(1443441));