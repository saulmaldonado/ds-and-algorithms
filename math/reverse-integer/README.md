# Reverse Integer

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given a 32-bit signed integer, reverse digits of an integer.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 0 when the reversed integer overflows.

<!-- any examples -->

### Example 1:

```
Input: x = 123
Output: 321
```

### Example 2:

```
Input: x = -123
Output: -321
```

### Example 3:

```
Input: x = 120
Output: 21
```

### Example 4:

```
Input: x = 0
Output: 0
```

### Constraints

`-231 <= x <= 231 - 1`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

Without converting the input to a string, we can reverse the int by taking the number in the ones place using `x % 10` pop the number from x by dividing x by `10` (using math.floor to truncate the result in JavaScript) multiplying our reversed number by ten to push the digits to the left and adding `x % 10` to our reversed number. We'll repeat the following until x becomes 0. To make sure the reversed int does not overflow, we'll set up some checks before we multiply the reversed number by 10 and add our popped number. this can be done by making sure the current reversed number is not greater than the the max int divided by 10 or min int divided by 10. if the reversed number is equal to the max/min int divided by 10 then well check if the popped number itself does not cause the int to overflow.

- [JavaScript](./reverse-integer.js)
- [TypeScript](./reverse-integer.ts)
- [Java](./reverse-integer.java)
- [Go](./reverse-integer.go)
</details>
