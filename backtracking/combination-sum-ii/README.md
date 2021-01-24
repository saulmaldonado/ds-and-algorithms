# Combination Sum II

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

### Example 1:

```
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

### Example 2:

```
Input: candidates = [2,5,2,1,2], target = 5
Output:
[
[1,2,2],
[5]
]
```

### Constraints

`1 <= candidates.length <= 10`

`1 <= candidates[i] <= 50`

`1 <= target <= 30`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

Instead of generating all combinations of numbers, we use backtracking and sorting to help up make optimal decision that would lead us to a possible combination

Our goal is to construct lists that when the values are summed up, equal the target. We can iterate over the array using recursive method calls adding the every new number we come across to a `sum`.

```
target = 5

sum = 2

[2,5,2,1,2]
 ^

sum = 7

[2,5,2,1,2]
   ^
```

Every time we make a recursive call, we will check that the sum equals the target. If it does we will add together add values we have seen so far the list of lists.

If the sum is greater than the target, then we can conclude that adding the last number caused the sum to overflow. We will backtrack our steps and remove the last number we've added. Now we will continue adding trying the other numbers in the array skipping the last one we encountered and skipping any duplicates.

We can greater optimize the number of operations done by sorting the array. If we know that next number is greater than or equal to the number we've just encountered, we don't have to try other numbers in the array and instead backtrack an additional step until we can get to a safer sum.

```
target = 5
sum = 1

[1,2,2,2,5]
 ^

target = 5
sum = 3

[1,2,2,2,5]
   ^

target = 5
sum = 5 // add [1,2,2] to the list

[1,2,2,2,5] // adding another number will just cause our sum to overflow. backtrack to 1
     ^

target = 5
sum = 1

[1,2,2,2,5]
 ^

target = 5
sum = 6

[1,2,2,2,5] backtrack to the beginning of the array
         ^

target = 5
sum = 0

[1,2,2,2,5]
^


target = 5
sum = 2

[1,2,2,2,5]
   ^

target = 5
sum = 7

[1,2,2,2,5] backtrack to the beginning of the array
         ^

target = 5
sum = 0

[1,2,2,2,5]
^

target = 5
sum = 0

[1,2,2,2,5] // add [5] to the list
         ^


[[1,2,2], [5]]
```



- [JavaScript](./combination-sum-ii.js)
- [TypeScript](./combination-sum-ii.ts)
- [Java](./combination-sum-ii.java)
- [Go](./combination-sum-ii.go)
</details>
