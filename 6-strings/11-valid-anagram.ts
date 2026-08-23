// leetcode #242

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
      return false;
  }

  const map: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = map[char] ? map[char] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!map[char]) {
      return false;
    }

    map[char]--;
  }

  return true;
};