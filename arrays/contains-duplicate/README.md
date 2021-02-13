# Contains Duplicate

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

### Example 1

```
Input: [1,2,3,1]
Output: true
```

### Example 2

```
Input: [1,2,3,4]
Output: false
```

### Example 3

```
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Set

We can use a set to insert numbers as we iterate over the array. If the number we want to add to the set is already in the array, then it is a duplicate.

Time: `O(N)`
Space: `O(N)`

- [JavaScript](./contains-duplicate.js)
- [TypeScript](./contains-duplicate.ts)
- [Java](./contains-duplicate.java)
- [Go](./contains-duplicate.go)

</details>
