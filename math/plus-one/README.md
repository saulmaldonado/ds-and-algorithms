# Plus One

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

### Example 1

```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

### Example 2

```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

### Example 3

```
Input: digits = [0]
Output: [1]
```

### Constraints

`1 <= digits.length <= 100`

`0 <= digits[i] <= 9`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Carry Over 1

Since each element in the array can only hold one digit, we'll need a way care of cases where the last digit is `9`. If we think about how we do long addition every time `1` is added to `9`, `9` becomes `0` and a `1` is carried over to add to the digit in the next place.

```
  1  // 1 is carried over
  19
+ 01
_____
  20  // 9 is changed to 0
```

If the next numbers happens to be `9`, the same process would repeat until the next numbers that is `< 9` or we reach the first digit.

In the case where all numbers in the array are `9`, a new array of length `n + 1` would need to be created and contain a leading `1` and `n` `0`s.

```
  999
+ 001
______
 1000


[1 0 0 0]
```

- [JavaScript](./plus-one.js)
- [TypeScript](./plus-one.ts)
- [Java](./plus-one.java)
- [Go](./plus-one.go)

</details>
