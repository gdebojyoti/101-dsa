// leetcode #344

function reverseString (arr: string[]) {
  let placeholder;

  for (let i = 0; i < arr.length / 2; i++) {
    placeholder = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = placeholder;
  }
}

// test cases

const str = ["a"];
// const str = ["a", "b", "c"];
// const str = ["a", "b", "c", "d", "e", "f"];

reverseString(str);
console.log(str);