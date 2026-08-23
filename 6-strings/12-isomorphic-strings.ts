// leetcode #205

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map: Record<string, string> = {}
  const usedCharacters = new Set();

  // loop through S
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // check if nth char from S already exists in map
    if (map[char]) {
      // corresponding value must match nth char of T; else exit
      if (map[char] !== t[i]) {
        return false;
      }
    } else {
      // else, add nth char from S to map
      
      // characters cannot be reused
      if (usedCharacters.has(t[i])) {
        return false;
      }
      usedCharacters.add(t[i]);
      map[char] = t[i];
    }
  }

  return true;
};