# Sum of Absolute Differences in a Sorted Array

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

You are given an integer array `nums` sorted order.

Build and return an integer array `result` with the same length as `nums` such that `result[i]` is equal to the summation of absolute differences between `nums[i]` and all the other elements in the array.

In other words, `result[i]` is equal to `sum(|nums[i]-nums[j]|)` where `0 <= j < nums.length and j != i` (0-indexed).

### Example 1:

```
 Input: nums = [2,3,5]

 Output: [4,3,5]

 Explanation: Assuming the arrays are 0-indexed, then

 result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,

 result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,

 result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.
```

### Example 2:

```
Input: nums = [1,4,6,8,10]
Output: [24,15,13,15,21]
```

### Constraints

- `2 <= nums.length <= 10^5`
- `1 <= nums[i] <= nums[i + 1] <= 10^4`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

For every `nums[i]` of nums, the **summation of absolute differences** can be found using by adding together all the abs value of `nums[i]` and every number in the array where `n` is the size of `nums`

```
|nums[i] - nums[0]| + |nums[i] - nums[1]| + ... + |nums[i] - nums[n - 1]|
```

This can be simplified by taking the summation all of the numbers before `nums[i]`, subtract the result by the product of the count of numbers before `nums[i]` by `nums[i]`, this can just be `i * nums[i]`, and adding it with the summation of all of the other the numbers to the end `nums[n-1]` with subtracting the result by the product of the count of numbers from `nums[i]` to the end and multiplying with `nums[i]`, this can be `(n - i) * nums[i]`.

note: we can include `nums[i]` in our right sum since it will be canceled out by `(n - i) * nums[i]`

```
i * nums[i] - (nums[0] + nums[1] + ... + nums[i - 1]) + (nums[i + 1] + nums[n - 1]) - (n - i) * nums[i]
```

This can be further simplified to

```
(i * nums[i] - leftSum) + (rightSum - (n - 1) * nums[i])
```

Instead of recalculating the sum of both sides for every `nums[i]` find the sum of all numbers using one full pass and as we iterate through `nums[i]` subtract `nums[i]` from `rightSum` and adding it to `leftSum` before calculating the **summation of absolute differences** of `nums[i + 1]`

As a bonus we can solve the problem with O(1) space by mutating the `nums` and returning it instead of creating a new array. This can be done by saving the current value of `nums[i]` to a variable before finding its summation of absolute differences, change `nums[i]` to the new summation, and adding/subtracting the saved value to the leftSum and rightSum before moving on to `nums[i + 1]`

- [JavaScript](./sum-of-absolute-differences-in-a-sorted-array.js)
- [TypeScript](./sum-of-absolute-differences-in-a-sorted-array.ts)
- [Java](./sum-of-absolute-differences-in-a-sorted-array.java)
- [Go](./sum-of-absolute-differences-in-a-sorted-array.go)
</details>
