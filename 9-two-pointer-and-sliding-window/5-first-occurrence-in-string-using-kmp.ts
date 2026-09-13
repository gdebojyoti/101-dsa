// leetcode #28

function strStr(haystack: string, needle: string): number {
  // find LPS of needle
  const lpsArr = findLpsArray(needle);

  // while loop
  let hIndex = 0, nIndex = 0;
  while (hIndex < haystack.length) {
    // if there is a match
    if (haystack[hIndex] === needle[nIndex]) {
      // return answer if match is complete
      if (nIndex === needle.length - 1) {
        return hIndex - nIndex;
      }
      
      // update indices
      hIndex++;
      nIndex++;

      continue;
    }

    // this code executes only if there wasn't a match

    // simply move ahead if nIndex is 0
    if (nIndex === 0) {
      hIndex++;
      continue;
    }

    // set nIndex to LPS of previous character
    nIndex = lpsArr[nIndex - 1];
  }

  // default condition
  return -1;
};

function findLpsArray(word: string): number[] {
  const arr = new Array(word.length).fill(0);

  let i = 0, j = 1;

  while (j < word.length) {
    if (word[i] === word[j]) {
      arr[j] = i + 1;
      
      i++;
      j++;
    } else {
      if (i === 0) {
        arr[j] = 0;
        j++;
      } else {
        i = arr[i - 1];
      }
    }
  }

  return arr;
}

// function findLpsArray(word: string): number[] {
//   const arr = [];
//   let subWord = "";

//   for (let i = 0; i < word.length; i++) {
//     subWord += word[i];
//     let lps = 0;

//     for (let j = subWord.length - 1; j > 0; j--) {
//       const prefix = subWord.slice(0, j);
//       const suffix = subWord.slice(subWord.length - j, subWord.length);

//       if (prefix === suffix) {
//         lps = prefix.length;
//         break;
//       }
//     }

//     arr.push(lps);
//   }

//   return arr;
// }