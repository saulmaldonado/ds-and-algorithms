# Combination Sum

## Difficulty

<!-- choose one -->

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

<!-- any examples -->

### Example 1:

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

### Example 2:

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

### Example 3:

```
Input: candidates = [2], target = 1
Output: []

```

### Example 4:

```
Input: candidates = [1], target = 1
Output: [[1]]
```

### Example 5:

```
Input: candidates = [1], target = 2
Output: [[1,1]]
```

### Constraints

`1 <= candidates.length <= 30`

`1 <= candidates[i] <= 200`

`All elements of candidates are distinct.`

`1 <= target <= 500`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

Instead of generating all possible valid combinations arrays, we can efficiently generate arrays through backtracking. We can do this by generating sub arrays that could be potential arrays, try to add new numbers and if that number does not break the validity (adding the number makes the sum greater than the target) we can repeat the operation with other numbers of the array. If the number we added breaks the array, we can simply backtrack that number and go on to the next one. This prevents us from having to generating an unnecessary amount of invalid arrays and instead move on to different combination of numbers as soon as possible.

```
target = 7
candidates = [2,3,6,7]
              ^
list = [2]

candidates = [2,3,6,7]
              ^
list = [2 2]

candidates = [2,3,6,7]
              ^
list = [2 2 2]

candidates = [2,3,6,7]
              ^
list = [2 2 2 2] // the sum of our array is greater than the target. We can stop adding to this combination of sub array since every number we add on will only increase its sum

candidates = [2,3,6,7]
                ^
list = [2 2 2 3] // the sum of our array is greater than the target. We can stop adding to this combination of sub array since every number we add on will only increase its sum

several backtracks later...


candidates = [2,3,6,7]
                ^
list = [2 3]

candidates = [2,3,6,7]
              ^
list = [2 3 2] // sum equals 7

several backtracks later ...


candidates = [2,3,6,7]
                    ^
list = [7] // sum equals 7
```

We can further optimize this answer by sorting our candidates since adding any number after `candidates[i]` to our array is unnecessary since we know that they are all greater than `candidates[i]`.

- [JavaScript](./title.js)
- [TypeScript](./title.ts)
- [Java](./title.java)
- [Go](./title.go)
</details>
