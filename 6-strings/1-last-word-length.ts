// leetcode #58

function lengthOfLastWord(s: string): number {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && count) {
      return count;
    }

    if (s[i] !== " ") {
      count++;
    }
  }

  return count;
};

// function lengthOfLastWord(s: string): number {
//   let lastWordLength = 0, currentLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " " && currentLength) {
//       lastWordLength = currentLength;
//       currentLength = 0;
//     }

//     if (s[i] !== " ") {
//       currentLength++;
//     }
//   }

//   return currentLength || lastWordLength;
// };