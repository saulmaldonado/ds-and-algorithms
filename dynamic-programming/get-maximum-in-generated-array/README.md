# Get Maximum in Generated Array

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

You are given an integer n. An array nums of length n + 1 is generated in the following way:

nums[0] = 0
nums[1] = 1
nums[2 * i] = nums[i] when 2 <= 2 _ i <= n
nums[2 _ i + 1] = nums[i] + nums[i + 1] when 2 <= 2 \* i + 1 <= n
Return the maximum integer in the array nums​​​.

<!-- any examples -->

### Example 1:

```
Input: n = 7
Output: 3
Explanation: According to the given rules:
  nums[0] = 0
  nums[1] = 1
  nums[(1 * 2) = 2] = nums[1] = 1
  nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
  nums[(2 * 2) = 4] = nums[2] = 1
  nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
  nums[(3 * 2) = 6] = nums[3] = 2
  nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is 3.
```

### Example 2:

```
Input: n = 2
Output: 1
Explanation: According to the given rules, the maximum between nums[0], nums[1], and nums[2] is 1.
```

### Example 2:

```
Input: n = 3
Output: 2
Explanation: According to the given rules, the maximum between nums[0], nums[1], nums[2], and nums[3] is 2.
```

### Constraints

`0 <= n <= 100`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

Similar to the fibonacci, this problem is dependent on calculating numbers before it. We can visualize it with this tree for calculating example number `nums[7]` which is using rules for generating a number provided.

```
                         nums[7]
                          /    \
                      nums[4] + nums[3]
                      /        /     \
                  nums[2]   nums[1] + nums[2]
                  /                      \
              nums[1]                    nums[1]
```

To find the greatest we can generate each number of the array and find the greatest of all of them. To minimize the number of operations needed to calculate a number in an array, we can store the result for `nums[i]` in an array for larger numbers to use. This will prevent us from having to recalculate numbers but at the expense for extra space.

- [JavaScript](./get-maximum-in-generated-array.js)
- [TypeScript](./get-maximum-in-generated-array.ts)
- [Java](./get-maximum-in-generated-array.java)
- [Go](./get-maximum-in-generated-array.go)
</details>
