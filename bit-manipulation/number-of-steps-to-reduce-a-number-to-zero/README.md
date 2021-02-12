# Number of Steps to Reduce a Number to Zero

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

### Example 1

```
Input: num = 14
Output: 6
Explanation:
Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.
```

### Example 2

```
Input: num = 8
Output: 4
Explanation:
Step 1) 8 is even; divide by 2 and obtain 4.
Step 2) 4 is even; divide by 2 and obtain 2.
Step 3) 2 is even; divide by 2 and obtain 1.
Step 4) 1 is odd; subtract 1 and obtain 0.
```

### Example 3

```
Input: num = 123
Output: 12
```

### Constraints

`0 <= num <= 10^6`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Division and Subtraction

We can keep track of the number of operations done when reducing the number to zero

```
num = 14

1. 14 / 2 = 7
2. 7 - 1 = 6
3. 6 / 2 = 3
4. 3 - 1 = 2
5. 2 / 2 = 1
6. 1 - 1 = 0
```

#### Bit Manipulation

We can also do the same but with bit operations

If the last number of the bits is `1` then the number is odd. We need to subtract the number by one. If the odd number is greater than 1 then the resulting number will always be an even number. This even number then needs to be subtracted by 2. This can be simplified to 2 operations for everytime there is a `1` in the ones place.

If the last number is a `0` then the number is even. All we need to do is divide by two which results in 1 operation.

For the solution we can keep track of the number of operations done to reduce the number to zero, or until we've shifted all the ones to the right. If the number in the ones place is `1`, increase the number of operations by 2. If the number in the ones place is `0` increase the operations by 1.

The one case we do have to be aware of is for `1`. Since subtracting the number by one results to `0`, we only need to do one operation. Since all numbers greater than zero has a `1` in the greatest place, then we can take the total number of operations done minus 1 for the answer

```
num = 15

1110 // 1 operation
 111 // 2 operations
  11 // 2 operations
   1 // 1 operation

// 6 total operations
```

Time: `O(20)` Worst case is number 10^6 where there are a total of 20 bits

Space: `O(1)`

- [JavaScript](./number-of-steps-to-reduce-a-number-to-zero.js)
- [TypeScript](./number-of-steps-to-reduce-a-number-to-zero.ts)
- [Java](./number-of-steps-to-reduce-a-number-to-zero.java)
- [Go](./number-of-steps-to-reduce-a-number-to-zero.go)

</details>
