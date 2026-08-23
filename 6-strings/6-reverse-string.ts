// leetcode #541

function reverseStr(s: string, k: number): string {
  let finalStr = "";
  let subStr = "";
  let shouldFlip = true;

  for (let i = 0; i < s.length; i++) {
    // get character; add to substring
    subStr = shouldFlip ? s[i] + subStr : subStr + s[i];

    // if "k" limit reached, reverse if needed; then add to finalStr; update flags
    if ((i + 1) % k === 0) {
      finalStr += subStr;
      shouldFlip = !shouldFlip;
      subStr = "";
    }
  }

  // check if substring has data; if so, update finalStr
  finalStr += subStr;

  return finalStr;
};