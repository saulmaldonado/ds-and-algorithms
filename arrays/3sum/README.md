# 3Sum

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

### Example 1:

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

### Example 2:

```
Input: nums = []
Output: []
```

### Example 3:

```
Input: nums = [0]
Output: []
```

### Constraints

`0 <= nums.length <= 3000`

`-105 <= nums[i] <= 105`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

We can simplify the problem by finding unique triplets of 3 numbers `a`, `b`, and `c` where `a + b = -c`. This way for every number in the array we only have to find two other numbers to the right of the number where adding them equals the inverse of our current number

```
c = -1
[-1,0,1,2,-1,-4]
  ^
[-1, 1, 2] [-1, 0, 1]

```

This works but will cause us to make triplets with the same numbers. We only need unique triplets. We can prevent this by sorting the array

```
[-4 -1 -1 0 1 2]
        ^  // anytime the current number is equal to the previous number we know that its a duplicate. We can simply skip to the next number
```

We'll also need a way to iterate over the numbers with the two pointers `a` and `b`. Placing the pointer next to each other won't work since we'll be traversing the same number over and over again. We can instead have two pointers at each end of the sub array we need to iterate over and traverse the numbers until the pointer meet. This ensure that we don't every iterate over the same more than once and create duplicates. Also since the array is already sorted, we can optimize the number of pointer moves we make depending on the sum of `a` and `b`. If sum of `a` and `b` is greater than our target `-c` we'll need to decrement our `b` to the next unique number. If the sum is smaller than our target, we'll need to increment our `a` pointer to the next unique number. If at any pointer the sum is equal to `-c` we can add all the number to our result list

```
-c = 4
a + b = 1
[-4,-1,-1,0,1,2] // sum is smaller than target, increment the a pointer
  ^  ^        ^

a + b = 1
[-4,-1,-1,0,1,2] // a pointer is the same as a-1, skip to next number
  ^     ^     ^

a + b = 2
[-4,-1,-1,0,1,2] // sum is smaller than target, increment a pointer
  ^       ^   ^

...
-c = 1
a + b = -1 + 2
[-4,-1,-1,0,1,2] // sum is equal to target, add all numbers to result list and move both pointer towards the center to the next unique number
     ^  ^     ^

res = [[-1,-1,2]]
...
```

Time: O(n^2)
Space: O(N)

- [JavaScript](./3sum.js)
- [TypeScript](./3sum.ts)
- [Java](./3sum.java)
- [Go](./3sum.go)
</details>
