// leetcode #20

function isValid(s: string): boolean {
  // exit for odd lengths
  if (s.length % 2 === 1) {
    return false;
  }
  
  const brackets: string[] = [];
  const matches: Record<string, string> = {
    "[": "]",
    "{": "}",
    "(": ")"
  }

  for (let i = 0; i < s.length; i++) {
    // handle open brackets
    if (matches[s[i]]) {
      brackets.push(s[i]);
      continue;
    }

    // handle close brackets

    // exit if stack is empty
    if (!brackets.length) {
      return false;
    }
    
    const openBracket = brackets.pop();

    // handle bracket mismatch
    if (matches[openBracket] !== s[i]) {
      return false;
    }
  }

  return brackets.length === 0;
};