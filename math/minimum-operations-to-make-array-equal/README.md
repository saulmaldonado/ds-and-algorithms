# Minimum Operations to Make Array Equal

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

You have an array arr of length n where arr[i] = (2 \* i) + 1 for all valid values of i (i.e. 0 <= i < n).

In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e. perform arr[x] -=1 and arr[y] += 1). The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.

Given an integer n, the length of the array. Return the minimum number of operations needed to make all the elements of arr equal.

### Example 1

```
Input: n = 3
Output: 2
Explanation: arr = [1, 3, 5]
First operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]
In the second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].
```

### Example 2

```
Input: n = 6
Output: 9
```

### Constraints

`1 <= n <= 10^4`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

For an array of `3` numbers most efficient way to get all the number to be the same would be to operate on the first and last number until they are the same as the first number

```
[1 3 5]
 ^   ^

[2 3 4]
 ^   ^

[3 3 3]
```

Since the interval betwee numbers are the same there will always be a pair of numbers that need the same number of operations to be equal to the middle element

```
[1 3 5 7 9]
 ^ ^   ^ ^

// the differece between 1 and 5 is 4
// the difference bewteen 9 and 5 is 4

// the difference between 3 and 5 is 2
// the difference between 7 and 5 is 2
```

We can say that the total number of operations needed to for an even length array to become all equal is the sum of the first `(n - 1) / 2` even numbers where `n` is the length of the array. Since we operate on numbers in pairs we will operate on number that are the same distance from the middle element. This makes for a total of `(n - 1) / 2` different pairs

```
[1 3 5 7 9]
 ^       ^  // 4

[5 3 5 7 5]
   ^   ^    // 2

[5 5 5 5 5]
```

We can get the sum of the first `n` even number using `n(n + 1)`

For odd number, the middle element of an array is the median. The two middle elements are `1` away from the median every two numbers away from the middle two elements will require an additional `2` operations giving up an operation sequence of `1,3,5,7..(n/2)` where `n` is the length of the array.

We can get the sum of the first `n` odd numbers using `n * n`

##### Implementation

There are only two possible formulas we can use.

1. For an array of even length we need the sum of the first `n` odd numbers. We would use `((n - 1) / 2) * (((n - 1) / 2) + 1)`

2. For an array of odd length we need the sum of the first `n` even number. We would use `((n - 1) / 2) * ((n - 1) / 2)`

- [JavaScript](./minimum-operations-to-make-array-equal.js)
- [TypeScript](./minimum-operations-to-make-array-equal.ts)
- [Java](./minimum-operations-to-make-array-equal.java)
- [Go](./minimum-operations-to-make-array-equal.go)

</details>
