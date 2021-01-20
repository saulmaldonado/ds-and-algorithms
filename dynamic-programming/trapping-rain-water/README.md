# Trapping Rain Water

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

### Example 1:

![Example 1](./images/rainwatertrap.png)

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped
```

### Example 2:

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

### Constraints

`n == height.length`

`0 <= n <= 3 * 104`

`0 <= height[i] <= 105`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

To better visualize this problem, we have to figure out what where water can be trapped. We can trap water in "valleys" or places on the map where the elevation is between two taller elevations.

Take for example an this array

```
[2 0 0 4]
```

We can trap water at index `1` and index `2` where elevations are `0` because they are both in between index `0` and index `2` where the elevations are `2` and `4`.

We can calculate the amount of water we can trap at any elevation, we have to find the tallest elevation to the left and tallest elevation to the right of its index.

The elevation can only hold as much water as the smaller its too tallest surrounding elevations allows

We can calculate the amount of water we can hold at any index `i` by:

1. Taking the max elevation to the left of `i`
2. Taking the max elevation to the right of the `i`
3. Taking the smaller of the two elevations and subtract the value at `i`

This can be simplified to `min(max(height[0 : i]), max(height[i + 1 : height.length])) - height[i]`

\*Since we can't hold negative water, negative differences will be rounded to `0`

Since we can simplify calculating the water to a single equation, are major concern is finding the elevations for every index in `heights`

#### Brute Force

This method involves searching the max surrounding heights at every index. This would involve O(n^2) operations for searching the entire array index

#### Dynamic Programming

Another method involves initially iterating over the array twice, once from the left and once from the right, and storing the heights in a seperate array

1. For the first iteration, left to right, at every index we'll store the highest elevation we've found up to that index in a `dp` array.
2. For the second iteration, right to left, at every index we'll find the highest elevation we've found up to that index, compare the value to the value store in the `dp` array and replace it if the new value is smaller than the existing value.
3. With the updated array value we will subtract that value with the value at `height[i]` and add the difference, if greater than 0, to a running total

This takes `O(n)` time and space

#### Two Pointers

The last method is based of the same idea, but does not ultilize a seperate array.

1. Initialize two pointers, `i` and `j` at each end of the array
2. Initialize two vairables that will hold the max height we've found with each pointer
3. Compare both values at the indices, take the smaller of the two and compare it with the running max for that pointer, if it is greater update the max for that pointer. If it is not take the difference between the value and the max for that pointer and add to ans (if positive)
4. Move the pointer towards the center
5. Repeats the operations until both pointers meet

- [JavaScript](./trapping-rain-water.js)
- [TypeScript](./trapping-rain-water.ts)
- [Java](./trapping-rain-water.java)
- [Go](./trapping-rain-water.go)
</details>
