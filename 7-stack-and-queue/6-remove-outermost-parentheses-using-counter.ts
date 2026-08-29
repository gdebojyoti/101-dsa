// leetcode #1021

function removeOuterParentheses(s: string): string {
  let counter = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      counter++;

      if (counter > 1) {
        ans += s[i];
      }
    } else {
      if (counter > 1) {
        ans += s[i];
      }

      counter--;
    }
  }

  return ans;
};