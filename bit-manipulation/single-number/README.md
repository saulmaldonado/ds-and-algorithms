# Single Number

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

**Follow up:** Could you implement a solution with a linear runtime complexity and without using extra memory?

### Example 1:

```
Input: nums = [2,2,1]
Output: 1
```

### Example 2:

```
Input: nums = [4,1,2,1,2]
Output: 4
```

### Example 3:

```
Input: nums = [1]
Output: 1
```

### Constraints

`1 <= nums.length <= 3 * 104`

`-3 * 104 <= nums[i] <= 3 * 104`

`Each element in the array appears twice except for one element which appears only once.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Frequency Map

We can find the only number in the array that only appears once by using a hash map that records the frequencies of each number in the array and afterwards iterate over the map and return the number that only has one appearance

```
[4,1,2,1,2]

{
  1: 2,
  2: 1,
  4: 1
}

// return 4
```

#### XOR Operator

Making the following observations based on the XOR operator leads us to use it in a solution

1. `x ^ 0 = 0`

   - if one of the arguments are 0 the result will always be `x`

2. `x ^ x = 0`

   - if both of the arguments are the same, the result will always be `0`

3. `x ^ y ^ z = z ^ y ^ x`
   - XOR is commutative, we can change the order of our arguments without changing the result

If we know that `x ^ x = 0`, we know that the result of using the XOR operator on duplicates in the array will result in 0

```
[1,1,2,2]

[1^1^2^2]

[0^0]

0
```

If there is a number in the array without a duplicate, the number will be the only non-zero number in the array

```
[1,1,2,2,3]
[1^1 ^ 2^2 ^ 3]
[0 ^ 0 ^ 3]

3
```

Since XOR is commutative, we can rearrange order of the arguments and still get the same result

```
[1,3,2,1,2,1]

[1^3^2^1^2^1] = [1^1 ^ 2^2 ^ 3] = 3
```

For an `O(N)` solution, we use the XOR operator on every number in the array and the result will be the only single number

Space: `O(N)`

Time: ``O(1)

- [JavaScript](./single-number.js)
- [TypeScript](./single-number.ts)
- [Java](./single-number.java)
- [Go](./single-number.go)
</details>
