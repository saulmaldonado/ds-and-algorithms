# Kth Missing Positive Number

![easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.

### Example 1:

```
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
```

### Example 2:

```
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
```

### Constraints

`1 <= arr.length <= 1000`

`1 <= arr[i] <= 1000`

`1 <= k <= 1000`

`arr[i] < arr[j] for 1 <= i < j <= arr.length`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

Compare `arr` (referred to as A) to an array of _strictly increasing order_ starting from `1` (referred to as B)

```
A = [2,3,4,7,11]
B = [1,2,3,4,5,6,7,8,9,10,11]
```

Using a number's index `i`, you can find the `A[i]` original value had there not been any numbers missing in the array. With this you can the how many numbers are missing before `A[i]`

Example:

```
// i value in B can also be found using i + 1
i = 4
A[4] = 11 // i value in A (array without missing values)
4 + 1 = 5 // i value in B (array with missing values)


// number of values before A[i]
A[i] - (i + 1)
or simplified
A[i] - i - 1

11 - 4 - 1 = 6

There are 6 numbers missing before A[4] (in this case the numbers missing are [1,5,6,8,9,10])
```

The easiest way to find the _kth_ missing number is to find smallest `i` where `A[i] - i + 1 is greater than or equal to k` and then subtracting by `k + 1` to find how many number to subtract from `A[i]` to reach the value of the _kth_

Explanation:

```
imagine we used (A[i] - i - 1) on every number of the array to find how many numbers are missing before every `i` in the array

k = 5
i = 4
 1 1 1 3 6
[2,3,4,7,11]
          ^

4 is the smallest i where A[i] - i - 1 (6) is greater than or equal to k (5)

before A[4] there are a total of 6 missing numbers ([1,5,6,8,9,10])

we want the 5th missing number
the 5th missing number is the 1st ((A[i] - i - 1) - k) missing from the left
11 (A[i]) we need to jump back or subtract 2 ((A[i] - i - 1) - k + 1)

formula:
A[i] - ((A[i] - i - 1) - k + 1)

simplified:
1) A[i] - (A[i] - i - k)

2) A[i] - A[i] + i + k

3) i + k

for:
i = 4
k = 5

4 + 5 = 9
9 is the 5th missing number
```

Implementations:

O(n)

1. We can iterate over the array, checking and find the first number where `A[i] - i - 1` is greater than or equal to k and find the answer using `i + k`

O(log n)

2. You can also use binary search to find `smallest i where A[i] - (i + 1) is greater than or equal to k` and using` i + k` to find the answer

- [JavaScript](./kth-missing-positive-number.js)
- [TypeScript](./kth-missing-positive-number.ts)
- [Java](./kth-missing-positive-number.java)
- [Go](./kth-missing-positive-number.go)
  </details>
