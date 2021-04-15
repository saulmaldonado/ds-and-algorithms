# Fibonacci Number

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

```
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```

Given n, calculate F(n).

### Example 1

```
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
```

### Example 2

```
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
```

### Example 3

```
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
```

### Constraints

`0 <= n <= 30`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

The _ith_ fibonacci number is the sum of the _i-1th_ and _i-2th_ number. We can solve this without using recursion by calculating the `1...n` fibonacci numbers in order. This way we can calculate the _ith_ number of the fibonacci sequence by taking the result of calculating the _i-1th_ number and the _i-2th_ number.

##### Implementation

If we know that the first two numbers are `0` and `1`, then we can solve the _3rd_ number by taking the sum of `0` and `1`. For the _4th_, we need to find the some of the _2nd_ and _3rd_ number. The _2nd_ we already know to be `1` and the _3rd_ number is the number we calculated earlier. For the _5th_ number we need to find the sum of the results of calculating the _3rd_ number and the _4th_.

This would go on until we reach the _nth_ which we can solve by summing the result of calculating the _n-1th_ and _n-2th_ numbers.

We'll keep track of 2 variables, `first` will be the _i-2th_ fib. number and `second` will be the _i-1th_ fib. number. After calculating a _ith_ fib number, `first` we'll be reassigned to `second` and `second` will be reassigned to the _ith_ fib number. This way when we calculate the _i+1th_ number `first` will be the _i-1th_ number and `second` will be the _ith_ number.

This would go on until we calculate the `n` number.

Time: `O(N)`
Space: `O(1)`

- [JavaScript](./fibonacci-number.js)
- [TypeScript](./fibonacci-number.ts)
- [Java](./fibonacci-number.java)
- [Go](./fibonacci-number.go)

</details>
