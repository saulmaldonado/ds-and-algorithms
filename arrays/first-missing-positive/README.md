# First Missing Positive

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given an unsorted integer array nums, find the smallest missing positive integer.

Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.

### Example 1:

```
Input: nums = [1,2,0]
Output: 3
```

### Example 2:

```
Input: nums = [3,4,-1,1]
Output: 2
```

### Example 3:

```
Input: nums = [7,8,9,11,12]
Output: 1
```

### Constraints

`0 <= nums.length <= 300`

`-231 <= nums[i] <= 231 - 1`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Sorting

Sorting will put all the number in increasing order.

By doing this we can this iterate over the array and check that numbers 1...n appear sequentially. If missing, we'll return the first missing number. If all numbers are present we return n + 1

time: O(n log n)
space: O(1)

#### Marking/Flipping numbers

An array without missing numbers is one where the array contains all and only numbers between `1` and `n` (length of array).

There are 2 scenarios we can come across:

1. All numbers `1...n` are present in the array. The smallest missing number is `n + 1`
2. There is a missing number. The missing number is the smallest number between `1...n` that is not included in the array.

We'll need a way of knowing what number between `1...n` are in the array. Once we know that we can just iterate over the number `1...n` and return the first one we know is not in the array.

This can easily be done using extra space but we can make use of the current array instead.

We are only interested in keeping track of numbers `1...n` or `n` total numbers. For number that are less than or greater than the range `1...n` we can mark as an invalid number. This can be by making it `n + 1`. Our array has the same length as `n` in fact we can even map every number from `1...n` to the indices of our array. For example if we find `1` we can have a flag a `nums[1 - 1]` to denotes that `1` is in the array.

We want to be able to flag the indices in the array without affecting the value. Since we are only dealing with positive numbers `1...n` we can mark numbers at these indices as negative and whenever we need to access the value at these index, we can just take the absolute value since the absolute value will be the same whether the number is positive or negative.

Example:

```
[3,4,5,5]
 ^ // 3 is found update the value at index (3 - 1) to negative

[3,4,-5,5]
   ^ // 4 is found update the value at index (4 - 1) to negative

[3,4,-5,-5]
      ^ // 5 is an invalid value (outside 1...n) skip this index

[3,4,-5,-5]
         ^ // 5 is an invalid value (outside 1...n) skip this index
```

Once we've marked all indices we need to we can read the array as a set

```
[3,4,-5,-5]

we can read this as:
index 0: positive, 1 is not in the array
index 1: positive, 2 is not in the array
index 2: negative, 3 is in the array
index 3: negative, 4 is in the array
```

To find the first missing number, we can just return the `index + 1` of the first positive number. If there are no positive numbers, meaning all numbers `1...n` are in the array, we can return the next smallest number `n + 1`

- [JavaScript](./first-missing-positive.js)
- [TypeScript](./first-missing-positive.ts)
- [Java](./first-missing-positive.java)
- [Go](./first-missing-positive.go)
</details>
