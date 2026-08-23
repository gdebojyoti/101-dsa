// leetcode #125

function isPalindrome(s: string): boolean {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    const regexp = /[a-z0-9]/i
    
    if (!regexp.test(s[p1])) {
      p1++;
      continue;
    }

    if (!regexp.test(s[p2])) {
      p2--;
      continue;
    }

    const left = s[p1];
    const right = s[p2];

    if (left.toLowerCase() !== right.toLowerCase()) {
      return false;
    }

    p1++;
    p2--;
  }

  return true;
};
