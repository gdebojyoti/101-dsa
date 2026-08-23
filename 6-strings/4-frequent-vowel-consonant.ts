function maxFreqSum(s: string): number {
  const lettersMap: Record<string, number> = {}

  // loop through string
  for (let i = 0; i < s.length; i++) {
    lettersMap[s[i]] = lettersMap[s[i]] ? lettersMap[s[i]] + 1 : 1;
  }

  let maxVowelCount = 0;
  let maxConsonantCount = 0;

  // loop through counts for each letter and store the max values
  Object.keys(lettersMap).forEach(letter => {
    if ("aeiou".indexOf(letter) >= 0) {
      // update max value for vowel
      maxVowelCount = Math.max(maxVowelCount, lettersMap[letter]);
    } else {
      // update max value for consonant
      maxConsonantCount = Math.max(maxConsonantCount, lettersMap[letter]);
    }
  })

  return maxVowelCount + maxConsonantCount;
};