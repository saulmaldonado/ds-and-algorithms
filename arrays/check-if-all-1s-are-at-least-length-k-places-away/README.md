# Check If All 1's Are at Least Length K Places Away

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

### Example 1:

![Example 1](./images/example-1.png)

```
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.
```

### Example 2:

![Example 2](./images/example-2.png)

```
Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.
```

### Example 3:

```
Input: nums = [1,1,1,1,1], k = 0
Output: true
```

### Example 4:

```
Input: nums = [0,1,0,1], k = 1
Output: true
```

### Constraints

`1 <= nums.length <= 105`

`0 <= k <= nums.length`

`nums[i] is 0 or 1`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### One pass with previous pointer

We can solve this problem by initializing a pointer that will keep track of the index of the last `1` found in the array. If we every come across another `1` and the pointer contains an index, we will take the distance in between and compare with `k`. If the distance is less than `k`, the two `1`s are not at least k places away and we can return false. If the distance is equal to or greater than `k` we will update the index of our previous pointer to the current index and move on with the rest of the array

```
k = 2

i = 0
prev = -1

[1,0,0,1,0,1]
 ^

i = 1
prev = 0

[1,0,0,1,0,1]
   ^

i = 2
prev = 0

[1,0,0,1,0,1]
     ^

i = 3
prev = 0

[1,0,0,1,0,1]
       ^
i - prev - 1 = 2
2 == k

i = 4
prev = 3

[1,0,0,1,0,1]
         ^

i = 5
prev = 3

[1,0,0,1,0,1]
           ^
i - prev -  1 = 1
1 < k // array is not valid return false
```

- [JavaScript](./check-if-all-1s-are-at-least-length-k-places-away.js)
- [TypeScript](./check-if-all-1s-are-at-least-length-k-places-away.ts)
- [Java](./check-if-all-1s-are-at-least-length-k-places-away.java)
- [Go](./check-if-all-1s-are-at-least-length-k-places-away.go)
</details>
