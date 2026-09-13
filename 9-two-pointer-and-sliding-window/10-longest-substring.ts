// leetcode #3

function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let map: Record<string, number> = {};
  let p1 = 0, p2 = 0;

  while (p2 < s.length) {
    const letter = s[p2];

    // if letter is part of map, and is also part of sliding window
    if (typeof map[letter] === "number" && map[letter] >= p1) {
      // bring forward i
      p1 = map[letter] + 1;
    }

    // update map
    map[letter] = p2;

    // update window
    max = Math.max(max, p2 - p1 + 1);

    p2++;
  }

  return max;
};