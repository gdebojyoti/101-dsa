// leetcode #49

function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};

  // loop through all strings
  for (let i = 0; i < strs.length; i++) {
    // generate sorted key for string
    const key = getKey(strs[i]);

    map[key] = map[key] ? [...map[key], strs[i]] : [strs[i]];
  }

  return Object.values(map);
};

function getKey(str: string): string {
  const arr = new Array(26).fill(0);
  
  str.split("").forEach(c => {
    const index = c.charCodeAt(0) - "a".charCodeAt(0);
    arr[index]++;
  })
  
  return arr.join();
}