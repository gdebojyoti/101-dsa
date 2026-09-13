// leetcode #567

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  let map1: Record<string, number> = {}
  for (let i = 0; i < s1.length; i++) {
    map1[s1[i]] = (map1[s1[i]] || 0) + 1;
  }

  let p1 = 0, p2 = s1.length - 1;
  const map: Record<string, number> = {}; // map of window only

  // construct initial map
  for (let i = p1; i <= p2; i++) {
    map[s2[i]] = (map[s2[i]] || 0) + 1;
  }

  while (p2 < s2.length) {
    // if map1 = map
    if (areMapsSame(map1, map)) {
      return true;
    }

    // remove i from map
    map[s2[p1]]--;
    p1++;

    // add j to map
    p2++;
    map[s2[p2]] = (map[s2[p2]] || 0) + 1;
  }

  return false;
};

function areMapsSame (map1: Record<string, number>, map2: Record<string, number>): boolean {
  const keys = Object.keys(map1);
  for (let i = 0; i < keys.length; i++) {
    if (map2[keys[i]] !== map1[keys[i]]) {
      return false;
    }
  }

  return true;
}