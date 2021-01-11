# Merge Sorted Array

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

<!-- any examples -->

### Example 1:

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

### Example 2:

```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
```

### Constraints

`0 <= n, m <= 200`

`1 <= n + m <= 200`

`nums1.length == m + n`

`nums2.length == n`

`-109 <= nums1[i], nums2[i] <= 109`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

We can modify the `nums1` array in place by merging the number of `nums2` and `nums1` (starting from `m - 1`) from back to front or greatest to least. Since you there are enough `0`s at the end of the `nums1` array to fit all the numbers of `nums2` we are able to have a pointer `i` that starts at the end of that `nums1` and can point to where the next sorted number can be placed. We will have to other pointers, `m` and `n`, that will point to the ends of the `nums1` and `nums2` (for the case of nums1, the end of the array is at index `m - 1`). The greater number of the two pointers will be taken and placed at index `i` of `nums1`. Pointers will decrement and the operations will repeat until one pointer reaches the end of their array. If there are still numbers in the `nums2` array we can insert the rest of the elements into `nums1`.

```
1.
 [1,2,3,0,0,0]
      ^     ^

 [2,5,6]
      ^
--------------------
2.
 [1,2,3,0,0,6]
      ^   ^

 [2,5,6]
    ^
--------------------

3.
 [1,2,3,0,5,6]
      ^ ^

 [2,5,6]
  ^
--------------------

4.
 [1,2,3,3,5,6]
    ^ ^

 [2,5,6]
  ^
--------------------

5.
 [1,2,2,3,5,6]
  ^ ^

 [2,5,6]
^
```

- [JavaScript](./merge-sorted-array.js)
- [TypeScript](./merge-sorted-array.ts)
- [Java](./merge-sorted-array.java)
- [Go](./merge-sorted-array.go)
</details>
