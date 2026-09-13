// leetcode #28

function strStr(haystack: string, needle: string): number {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;
    
    for (; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) { // in case of character mismatch
        break;
      }
    }

    if (j === needle.length) { // in case of complete match
      return i;
    }
  }

  return -1; // needle wasn't part of haystack
};


// function strStr(haystack: string, needle: string): number {
//   let index = -1;
//   let hIndex = 0, nIndex = 0;

//   while (hIndex < haystack.length) {
//     if (haystack[hIndex] === needle[nIndex]) {
//       // update index if nIndex is 0
//       if (nIndex === 0) {
//         index = hIndex;
//       }

//       // return answer if complete
//       if (nIndex === needle.length - 1) {
//         return index;
//       }

//       nIndex++;
//     } else {
//       // reset flags
//       if (index > -1) {
//         hIndex = index;
//       }

//       nIndex = 0;
//       index = -1;
//     }

//     // increment haystack index
//     hIndex++;
//   }

//   return -1;
// };