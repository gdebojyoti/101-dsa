// leetcode #424

function characterReplacement(s: string, k: number): number {
  if (s.length <= k) {
    return s.length;
  }
  
  let max = k;
  let i = 0, j = k;

  // create map of all letters in window
  const map:Record<string, number> = {};
  for (let a = i; a <= j; a++) {
    const letter = s[a];
    map[letter] = (map[letter] || 0) + 1;
  }

  while (j < s.length) {
    // check if window is valid
    let letterCount = 0, maxCount = 0;
    Object.keys(map).forEach(key => {
      maxCount = Math.max(maxCount, map[key]);
      letterCount += map[key];
    })

    if (letterCount - maxCount <= k) {
      max++;
    } else {
      // remove ith letter from map
      const letter = s[i];
      map[letter]--;
      
      i++;
    }

    j++;

    // add next letter to map
    const letter = s[j];
    map[letter] = (map[letter] || 0) + 1;
  }

  return max;
};