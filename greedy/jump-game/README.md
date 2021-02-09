# Jump Game

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index

### Example 1:

```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

### Example 2:

```
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

### Constraints

`1 <= nums.length <= 3 * 104`

`0 <= nums[i] <= 105`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Greedy

For every position `i` in the array we can:

1. Take a new jump of size `nums[i]`
2. Carry over the previous jump by taking a "new" jump of `nums[i - 1] - 1` size

If we take the largest possible jump at every position we will eventually reach the end. If at any position in the array before the end, the largest jump we can take is `0` it means there is no possible path to reach the end.

We can iterate over the array can keep track of the last jump we made. If `nums[i]`, the current jump is greater than carrying over the last jump, `lastJump - 1`, we will replace the last jump with the current jump. If at any point the largest jump we can make at any point before the last position is `0`, then we can no longer move.

Time: `O(N)` Where `N` is the length of the array minus 1

Space: `O(1)`

- [JavaScript](./jump-game.js)
- [TypeScript](./jump-game.ts)
- [Java](./jump-game.java)
- [Go](./jump-game.go)
</details>
