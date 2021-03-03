# Missing Number

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

### Example 1

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

### Example 2

```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

### Example 3

```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

### Example 4

```
Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
```

### Constraints

`n == nums.length`

`1 <= n <= 104`

`0 <= nums[i] <= n`

`All the numbers of nums are unique.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### XOR

We know that there are a total of `n` numbers in the array. If the array must contain all numbers between `[0, n]` then there must be one missing number. If we have a list of numbers we expect to see in the array, say `[0 1 2 3 4]`, then we would expect to have one of those numbers to not be in the array. We can use a list or set of numbers we expect to see in the array and every time we find a number we would delete it from the list.

```
list of numbers = [0 1 2 3 4 5]

nums = [1 2 3 4 5]

remove numbers seen...

nums = [0]
```

We could obviously do this with extra space, but conveniently the indices of the array would work just as well since it contains numbers within the range `[0, n - 1]` (with the exception of `n` which we would have to include ourselves). For this to work we would need a way to "remove" the indices as we find their corresponding numbers in the array. For this we could use the XOR operator.

The basic operations of the XOR operator are:

1. `x ^ 0 = x`

   - if one of the arguments are 0 the result will always be `x`

2. `x ^ x = 0`

   - if both of the arguments are the same, the result will always be `0`

3. `x ^ y ^ z = z ^ y ^ x`
   - XOR is commutative, we can change the order of our arguments without changing the result

If we are able to pair an index with a number in the array, then the outcome will be `0`. If we cannot then the result will be `x`. This works the same way as our initial list. For every number-index pair we find `x ^ x` pair we find we can remove it from the list. In the end we will have match all the indices with numbers expect for one and that one number will be the result of using XOR on all indices and elements in the array.

```
indices = [0 1 2 3 4 5]
nums = [0 2 3 4 5]

indices ^ nums

(0 ^ 1 ^ 2 ^ 3 ^ 4 ^ 5) ^ (0 ^ 2 ^ 3 ^ 4 ^ 5)

(0 ^ 0) ^ 1 ^ (2 ^ 2) ^ (3 ^ 3) ^ (4 ^ 4) ^ (5 ^ 5)

(0) ^ 1 ^ (0) ^ (0) ^ (0) ^ (0)

1 ^ 0

1
```

Time: `O(N)` Where `N` is the length of `nums`

Space: `O(1)`

#### Sum of Numbers

If we know that theres is only one numbers is missing, then we know that sum of all numbers in the range `[0, n]` minus the numbers in the array, `sum(0..n) - sum(nums)`, will equal the missing number. This works similarly to the list strategy where we remove expected numbers as we find them in the array. We can use **_Gauss' formula_** to calculate the sum of all numbers in `[0, n]` and as we iterate over the array, subtract the value of the number from the sum.

Time: `O(N)` where `N` is the length of `nums`

Space: `O(1)`

- [JavaScript](./missing-number.js)
- [TypeScript](./missing-number.ts)
- [Java](./missing-number.java)
- [Go](./missing-number.go)

</details>
