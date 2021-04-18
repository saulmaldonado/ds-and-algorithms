# Can Make Arithmetic Progression From Sequence

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

### Example 1

```
Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
```

### Example 2

```
Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
```

### Constraints

`2 <= arr.length <= 1000`

`-10^6 <= arr[i] <= 10^6`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

In an arithmetic progression, the minimum and maximum values are the first and last elements. The element following the first element must be greater than the first element and the element preceeding the last element must be less than the last element. For it to be an arithmetic progression the difference between these first and following elements, and the last and preceeding elements must all be the same.

```
1  3  5  7  9  11
 +2 +2 +2 +2 +2
```

If we were to take the difference between the first and last elements the difference must be evenly distributed among all the elements.

```
diff = 10

1  3  5  7  9  11
 +2 +2 +2 +2 +2  = 10
```

##### Implementation

To check for an arithmetic progression, find and take the difference between the min and max elements and insert all of the elements in a set. We'll use the difference and divied it by the size of the progression minus 1. If it divides evenly, then this will be the interval between numbers in the progression

```
min = 1
max = 11

diff = 10

interval = 10 / 2

1  3  5  7  9  11
```

We'll then again traverse the array by starting at `min` and incrementing by the difference checking that the number in contained in the set. If it is, we'll continue. If its not the array is not a valid arithmetic progression

- [JavaScript](./can-make-arithmetic-progression-from-sequence.js)
- [TypeScript](./can-make-arithmetic-progression-from-sequence.ts)
- [Java](./can-make-arithmetic-progression-from-sequence.java)
- [Go](./can-make-arithmetic-progression-from-sequence.go)

</details>
