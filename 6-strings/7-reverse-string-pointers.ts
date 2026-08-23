// leetcode #541

function reverseStr(s: string, k: number): string {
  let arr = s.split("");

  let count = 0;

  while (true) {
    let p1 = count * k;
    let p2 = Math.min(p1 + k - 1, arr.length - 1);
    
    while (p1 < p2) {
      const temp = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = temp;

      p1++;
      p2--;
    }

    count += 2;

    // exit if next p1 exceeds arr length
    if (arr.length <= count * k) {
      break;
    }
  }

  return arr.join("");
};