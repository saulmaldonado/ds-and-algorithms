# Set Mismatch

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

### Example 1

```
Input: nums = [1,2,2,4]
Output: [2,3]
```

### Example 2

```
Input: nums = [1,1]
Output: [1,2]
```

### Constraints

`2 <= nums.length <= 104`

`1 <= nums[i] <= 104`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Set of Numbers

To keep track of the unique numbers in the array, we can use a set. Whenever we come across a duplicate number we will hold on to it to return in the result array. To find the missing number we will use the sum of consecutive numbers from `i...n`. If the `n * (n + 1) / 2` is the sum of all numbers `1 + 2 + 3 + ... + n` where is the length of the array, then we know we can find the single missing number by subtracting all the non-missing numbers (unique numbers in the set) from the sum. `(n * (n + 1) / 2) - sum(set)`

Time: `O(N)`

Space: `O(N)`

#### Marking Numbers in the Array

Since we know that all of the possible numbers in the array are between `1..n` and we know that all the numbers are **positive**, then we can use positions in the array to indicate if a number has already been seen. For example if `nums[i]` is found at index `i` then we can mark the number at `nums[nums[i] - 1]` as negative. This will indicate that the number `nums[i]` has already been seen. If we find an duplicate `nums[i]` later in the array, we would know this since the number at `nums[num[i] - 1]` will be negative.

```
[1 2 2 4]
 ^       // mark the number at `nums[1 - 1]` as negative

[-1 2 2 4]
    ^    // mark the number at `nums[2 - 1]` as negative

[-1 -2 2 4]
       ^ // the number at `nums[2 - 1]` is already negative. 2 is the duplicate number
```

If we loop over our array again we can determine the missing number by checking the index of the only positive number. For example

```
[-1 -2 2 -4]
  ^         // number i + 1, 1 is already in the array

[-1 -2 2 -4]
     ^      // number i + 1, 2 is already in the array

[-1 -2 2 -4]
       ^    // number i + 1, 3 is missing from the array
```

Time: `O(N)`

Space: `O(1)`

- [JavaScript](./set-mismatch.js)
- [TypeScript](./set-mismatch.ts)
- [Java](./set-mismatch.java)
- [Go](./set-mismatch.go)

</details>
