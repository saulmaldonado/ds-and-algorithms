# Median of Two Sorted Arrays

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Follow up: The overall run time complexity should be O(log (m+n)).

### Example 1:

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Example 2:

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

### Example 3:

```
Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
```

### Example 4:

```
Input: nums1 = [], nums2 = [1]
Output: 1.00000
```

### Example 5:

```
Input: nums1 = [2], nums2 = []
Output: 2.00000
```

### Constraints

`nums1.length == m`
`nums2.length == n`
`0 <= m <= 1000`
`0 <= n <= 1000`
`1 <= m + n <= 2000`
`-106 <= nums1[i], nums2[i] <= 106`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Partitioning

We can think of a median as a partition in a sorted array where the array is divided into two separate parts where both parts are:

1. of equal length
2. all of the elements in the left half are smaller or equal to all numbers in the right half

```
# Even
median = (1 + 10) / 2 = 5.5

[1 2 3 4 5 | 6 7 8 9 10] // 5.5 is in between 5 and 6 in the array

# Odd
median = (1 + 9) / 2 = 5

[1 2 3 4 [5] 6 7 8 9] // 5 is the median
```

If we have two arrays, our first intuition is to merge the arrays into one and find the median of the combined array

```
# with merging

# Odd length merged array
[1 2 3 4 5] + [3 4 5 6] = [1 2 3 3 [4] 4 5 5 6] // 4 is the median of the merged array

# Even length merged array
[1 3 5 7 9] + [2 4 6 8 10] = [1 2 3 4 5 | 6 7 8 9 10] // 5.5 is the median of the merged array
```

This works as a solution but involves sorting a lot of values that aren't even close to the median of the array. Instead of sorting lets try to group the elements of both arrays into two sets of numbers. We can do this by partitioning both array so:

1. all elements to the left of both partitions are all less than or equal to the all the elements to the right of both partitions
2. the combined length of both half arrays are of equal length

```
[1 2 3 | 4]
    [3 | 4 5 6]

// all the numbers in left are less than or equal to all the elements in right
left [1 2 2 3]
right [4 4 5 6]
```

If we can find right partitions for both arrays and both of the combined halves are equal then all we need to do is to get the median between the `max(left)` and `min(right)`, the two closest numbers to the middle of the array.

We can find these partitions by ensuring two conditions: (`i` indicates the partition for the first array and `j` indicates the partition for the second array):

1. There are equal numbers of elements on the left sides of both partitions to the right side of both partitions. This can be expressed as `i + j = nums1.length - i + nums2.length - j`

2. The element just to the left of the partition in `nums2` is less than or equal to the element just to the right of the partition in `nums1`. Expressed as: `nums2[j - 1] <= nums1[i]`

3. The element just to the right of the partition in `nums2` is greater or equal to the element just to the left of the partition in `nums1`. Expressed as: `nums2[j] <= nums1[i - 1]`

4. length of `nums1` is less than of equal to length of `nums2`

We need to find `i` in `nums1` such that:

`nums2[j - 1] <= nums1[i]` and `nums1[i - 1] <= nums2[j]` and `j = ((nums1.length + nums2.length + 1) / 2) - i`

When `i` is found, we can find the median by:

```
# Odd
max(nums1[i - 1], nums2[j - 1])

# Even
max(nums1[i - 1], nums2[j - 1]) + min(nums1[i], nums2[j]) / 2
```

Time: `O(log(m + n))`

Space: `O(1)`

- [JavaScript](./median-of-two-sorted-arrays.js)
- [TypeScript](./median-of-two-sorted-arrays.ts)
- [Java](./median-of-two-sorted-arrays.java)
- [Go](./median-of-two-sorted-arrays.go)
</details>
