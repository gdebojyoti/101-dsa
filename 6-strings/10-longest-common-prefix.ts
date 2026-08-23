// leetcode #14

function longestCommonPrefix(strs: string[]): string {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
};