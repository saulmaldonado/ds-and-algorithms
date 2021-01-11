function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  m--;
  n--;
  let i: number = nums1.length - 1;

  while (n >= 0 && m >= 0) {
    if (nums2[n] > nums1[m]) {
      nums1[i] = nums2[n];
      n--;
    } else {
      nums1[i] = nums1[m];
      m--;
    }
    i--;
  }

  while (n >= 0) {
    nums1[i] = nums2[n];
    i--;
    n--;
  }
}
