# Subsets

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

### Example 1

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

### Example 2

```
Input: nums = [0]
Output: [[],[0]]
```

### Constraints

`1 <= nums.length <= 10`

`-10 <= nums[i] <= 10`

`All the numbers of nums are unique.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Backtracking

A set is a subset of a supset if all the elements in the set are also elements in the superset. For a **_power set_** this includes all types of sets including proper sets where the superset includes at least one element that is not inculded in the set and improper sets where the set has all the elements as the superset. This makes for a total of `2^N` total subsets.

To we this we'll need to generate all possible combinations of elements of all `n - 1` lengths.

```
0 = []

1 = [1] [2] [3]

2 = [1 2] [1 3] [2 3]

3 = [1 2 3]
```

We can so this using backtracking where we add combinations to our total combinations as we build them. For the first element, we add it to our current combination and record it in our list of combinations. If there is another element in the array, we can add it to the current combination and repeat the operations again. Once we reach the end of the array, we'll backtrack to the first element and remove it from the current combination and now insert the second in the array to the combination. This will go on until we reach the last element in the array and there are no other elements to add to the current combination

```
[[]]

[1 2 3] // add [1]
 ^

[1 2 3] // add [1 2]
 ^ ^

[1 2 3] // add [1 2 3]. There are no other elements to add backtrack to the one element
 ^ ^ ^

[1 2 3] // add [1 3]. backtrack
 ^   ^

[1 2 3] // add [2]
   ^

[1 2 3] // add [2 3]. backtrack
   ^ ^

[1 2 3] // add [3]
     ^
```

Time: `O(2^N)` Where `N` is the length of `nums`

Space: `O(2^N)`

- [JavaScript](./subsets.js)
- [TypeScript](./subsets.ts)
- [Java](./subsets.java)
- [Go](./subsets.go)

</details>
