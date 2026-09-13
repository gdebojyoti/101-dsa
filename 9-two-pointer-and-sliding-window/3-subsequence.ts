// leetcode #392

function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0, tIndex = 0;

  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }

    tIndex++;
  }

  return sIndex === s.length;
};