// leetcode #49

function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};

  // loop through all strings
  for (let i = 0; i < strs.length; i++) {
    // generate sorted key for string
    const key = getKey(strs[i]);
    // const key = strs[i].split("").sort().join("");
    
    map[key] = map[key] ? [...map[key], strs[i]] : [strs[i]];
  }

  return Object.values(map);
};

function getKey(str: string): string {
  const arr = str.split("").map(s => s.charCodeAt(0));
  return sort(arr).map(n => String.fromCharCode(n)).join("");
}

function sort(arr: number[]): number[] {
  // return if length is 1
  if (arr.length <= 1) {
    return arr;
  }
  
  // split into 2 parts
  const mid = Math.floor(arr.length / 2);
  const left = sort(arr.slice(0, mid));
  const right = sort(arr.slice(mid, arr.length));

  let p1 = 0, p2 = 0;
  let sorted = []

  while (p1 < left.length && p2 < right.length) {
    if (left[p1] < right[p2]) {
      sorted.push(left[p1]);
      p1++;
    } else {
      sorted.push(right[p2]);
      p2++;
    }
  }

  if (p1 === left.length) {
    sorted = [...sorted, ...right.slice(p2, right.length)];
  } else {
    sorted = [...sorted, ...left.slice(p1, left.length)];
  }

  return sorted;
}