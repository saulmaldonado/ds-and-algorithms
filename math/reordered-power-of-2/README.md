# Reordered Power of 2

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

### Example 1

```
Input: 1
Output: true
```

### Example 2

```
Input: 10
Output: false
```

### Example 3

```
Input: 10
Output: false
```

### Example 4

```
Input: 24
Output: false
```

### Example 5

```
Input: 46
Output: true
```

### Constraints

`1 <= N <= 10^9`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Counting Digits

##### Intuition

We can only reorder a number into another number if both of the numbers have the same digits. For example `1234` can be rearranged to `2134` because they have the same digits. If our number `n` has the same digit count as one of the 31 different powers of 2 (`10^9` is the upper limit for `N`), then we can rearrange the digits of `n` into a power of 2

##### Implementation

We'll need the count of digits for `N` and the possible power of 2s. We can use a helper method that will do the counting and return a `freq` array of size `10` where `freq[i]` represents the total number of `i` digits in the number. We can count the digits by getting `n % 10` to get the digit in the ones place and `n /= 10` to remove the number in the ones place until the number becomes `0`

To compare the `n` with the possible power of 2s we will iterate from `i` from `0` to `30` and get the digits counts for `1 << i`. We'll compare the digit counts for `n` and `1 << i` using either another helper method or a std library method. If we find a number `1 << i` that has the same digit count we will return `true`. If not we will return `false`

Time: `O(log^2 N)` Where `N` is `N`
Space: `O(20)`

- [JavaScript](./reordered-power-of-2.js)
- [TypeScript](./reordered-power-of-2.ts)
- [Java](./reordered-power-of-2.java)
- [Go](./reordered-power-of-2.go)

</details>
