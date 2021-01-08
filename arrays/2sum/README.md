# Two Sum

## Difficulty

<!-- choose one -->

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

<!-- any examples -->

### Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 2:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints

`2 <= nums.length <= 103`
`-109 <= nums[i] <= 109`
`-109 <= target <= 109`
`Only one valid answer exists.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

For every number in the array we can find the numbers complement (number that when added to will equal target) by using `target - nums[i]`. We for every number we simply need to search for its complement in the array. We can do this in one pass by utilizing a Map that stores the index of the current number as we are iterating over the array. When we find a number's complement in the Map `map[target - nums[i]]`, meaning we have already come this number in the array before, we can use the last found index in our answer along with our current index

<!-- solution explanation -->

<!-- relative links to solution files. {title} should be replaced with the name of the problem in `kebab-case` -->

- [JavaScript](./2sum.js)
- [TypeScript](./2sum.ts)
- [Java](./2sum.java)
- [Go](./2sum.go)
</details>
