# Remove Element

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

### Example 1:

```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.
```

### Example 2:

```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
```

### Constraints

`0 <= nums.length <= 100`

`0 <= nums[i] <= 50`

`0 <= val <= 100`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

We can solve this `in-place` by splitting the array between numbers that are equal to `val` and those that are not. We can do that with two pointers. The first, `i`, will be the fast pointer. This pointer will traverse the entire array. The second pointer, `j`, will be the slow pointer. The slow pointer indicate the end of our "filtered" array. We can use both these pointer to "filter" through the array. The fast pointer will see if `nums[i]` is equal to `val`. If it is **not** equal to `val`, the number will be moved to the other side of our slow pointer. This can be a swap or a copy of values from `nums[i]` to `nums[j]`. Afterwards `j` will be incremented to include this number in the "filtered" array.

```
val = 2

i = 0
j = 0
[3,2,2,3]
 ^

nums[i] is not equal to val, we will swap nums[i] with nums[j] and increment j

i = 1
j = 1
[3,2,2,3]
   ^
nums[i] is equal to val, we will not make a swap or increment j

i = 2
j = 1
[3,2,2,3]

nums[i] is equal to val, we will not make a swap or increment j

i = 3
j = 1
[3,2,2,3]
   ^   ^
nums[i] is not equal to val, we will swap nums[i] with nums[j] and increment j


i = 4
j = 2

[3,3,2,2]
     ^

Subarray (0, j) is the filtered array. notice how the array that the order elements have not changed in this array.
```

We can then return `j` as the length of our new filtered array.

- [JavaScript](./remove-element.js)
- [TypeScript](./remove-element.ts)
- [Java](./remove-element.java)
- [Go](./remove-element.go)
</details>
