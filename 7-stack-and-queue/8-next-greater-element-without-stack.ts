// leetcode #496

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = {
    [nums2[nums2.length - 1]]: -1
  };

  for (let i = nums2.length - 2; i >= 0; i--) {
    // if the next number itself is higher
    if (nums2[i + 1] > nums2[i]) {
      map[nums2[i]] = nums2[i + 1];
      continue;
    }

    // keep checking till a higher number is found, or map ends
    let nextMapIndex = nums2[i + 1];
    while (true) {
      const mapValue = map[nextMapIndex];
      if (mapValue === -1 || mapValue > nums2[i]) {
        map[nums2[i]] = mapValue;
        break;
      }

      nextMapIndex = mapValue;
    }
  }

  return nums1.map(n => map[n]);
};