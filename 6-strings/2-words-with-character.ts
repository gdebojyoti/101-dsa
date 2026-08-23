// leetcode #2942

function findWordsContaining(words: string[], x: string): number[] {
  const result = [];

  // loop through all words
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    // loop through letters of current word
    for (let j = 0; j < word.length; j++) {
      // check if word contains `x`
      if (word[j] === x) {
        result.push(i); // push word index into array
        break; // exit inner loop
      }
    }
  }

  return result;
};