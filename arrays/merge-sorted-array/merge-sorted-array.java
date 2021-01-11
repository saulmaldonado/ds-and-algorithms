class Solution {
  public void merge(int[] nums1, int m, int[] nums2, int n) {
    n--;
    m--;

    int i = nums1.length - 1;

    while(n >= 0 && m >= 0) {
      if(nums2[n] > nums1[m]) {
        nums1[i] = nums2[n];
          n--;
      } else {
        nums1[i] = nums1[m];
          m--;
      }
      i--;
    }

    while(n >= 0) {
      nums1[i] = nums2[n];
      i--;
      n--;
    }

  }
}
