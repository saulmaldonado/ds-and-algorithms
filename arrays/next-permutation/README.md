# Next Permutation

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.

### Example 1:

```
Input: nums = [1,2,3]
Output: [1,3,2]
```

### Example 2:

```
Input: nums = [3,2,1]
Output: [1,2,3]
```

### Example 3:

```
Input: nums = [1,1,5]
Output: [1,5,1]
```

### Example 4:

```
Input: nums = [1]
Output: [1]
```

### Constraints

`1 <= nums.length <= 100`

`0 <= nums[i] <= 100`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

If we observe a sequence that does not have a next permutation, we can see that the sequence is in descending order, or `nums[i] > nums[i + 1]`. If we want to find the next permutation for a number, we have to find the first number from the end where `nums[i] < nums[i + 1]` or where the number to the right is greater than the current number. It there is one, we have the find the greatest number to the right that we can "push" to the front and switch out the number

```
1 5 8 7 6 // 5 is the first number from the right where nums[i] > nums[i + 1]
  ^

// we'll have to find the next greater number to the right

1 5 8 7 6
  ^     ^

// 6 is the next greatest number of the smallest number in the sub array `i + 1, nums.length`
// swap 6 with 5

1 6 8 7 5
```

After swapping, the first half of the array before `i` is already in position for the next permutation, the second half is not.

We want to create next smallest number with the first half already in place.

```
1 6 8 7 5 // we need to rearrange these number to create the small sub array
    ^ ^ ^
```

The easiest way to do this is to sort the number from least to greatest. This will push the greater numbers to the end of the array

```
1 6 5 7 8 sorting the number puts the smallest number, 5, in the 100's place and the greatest number, 8, in the 1's place
    ^ ^ ^
```

After the sorting the right half of the array, the number array is already in its next possible permutation

- [JavaScript](./next-permutation.js)
- [TypeScript](./next-permutation.ts)
- [Java](./next-permutation.java)
- [Go](./next-permutation.go)
</details>
