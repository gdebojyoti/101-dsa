// leetcode #88

function mergeSortedArrays(nums1: number[], m: number, nums2: number[], n: number): void {
  let xIndex = m - 1;
  let yIndex = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (yIndex < 0 || nums1[xIndex] > nums2[yIndex]) {
      nums1[i] = nums1[xIndex];
      xIndex--;
    } else {
      nums1[i] = nums2[yIndex];
      yIndex--;
    }
  }
};