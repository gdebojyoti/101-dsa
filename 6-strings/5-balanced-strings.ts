function balancedStringSplit(s: string): number {
  let count = 0;
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") {
      temp++;
    } else {
      temp--;
    }

    if (!temp) {
      count++;
    }
  }

  return count;
};