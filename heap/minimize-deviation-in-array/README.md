# Minimize Deviation in Array

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

You are given an array nums of n positive integers.

You can perform two types of operations on any element of the array any number of times:

- If the element is even, divide it by 2.
  - For example, if the array is [1,2,3,4], then you can do this operation on the last element, and the array will be [1,2,3,2].
- If the element is odd, multiply it by 2.
  - For example, if the array is [1,2,3,4], then you can do this operation on the first element, and the array will be [2,2,3,4].

The deviation of the array is the maximum difference between any two elements in the array.

Return the minimum deviation the array can have after performing some number of operations.

### Example 1:

```
Input: nums = [1,2,3,4]
Output: 1
Explanation: You can transform the array to [1,2,3,2], then to [2,2,3,2], then the deviation will be 3 - 2 = 1.
```

### Example 2:

```
Input: nums = [4,1,5,20,3]
Output: 3
Explanation: You can transform the array after two operations to [4,2,5,5,3], then the deviation will be 5 - 2 = 3.
```

### Constraints

`n == nums.length`

`2 <= n <= 105`

`1 <= nums[i] <= 109`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Max Heap

Based on the operations, we can do to each number we can observe the possible numbers we can work with.

1. For even numbers, we can half the number until we reach an odd number which then our operations indicate that cannot divide further only double.

```
// for 16, we can have 4 possible numbers

16 -> 8 -> 4 -> 1

// for 7, we can have 2 possible numbers

14 -> 7
```

2. For odd numbers, we can only double the number once. Doubling converts an odd number into an even number which our operations indicate that we cannot double anymore. We were to halve our doubled even number we can return to our odd number.

```
// for 5, we can have 2 possible numbers

5 <-> 10

// for 13, we can have 2 possible numbers

13 <-> 26
```

We can think of the numbers in the array as part of a bigger collection of possible numbers or even sequences of numbers.

```
[4,1,5,20,3]

[
  4 -> 2 -> 1
  2 -> 1
  5 <-> 10
  20 -> 10 -> 5
  3 <-> 6
]
```

We can flip the odd number sequences so that the greater even number is first

```
[
  4 -> 2 -> 1
  2 -> 1
  10 -> 5
  20 -> 10 -> 5
  6 -> 3
]
```

Now all numbers are their at their maximum. Applying an operation to any of these numbers would simply be halving it

For this problem we want to calculate deviations of an array which is simply the different between the max and min of the array. We are not interest in calculating different between any in between numbers.

If we want to decrease the deviation, our best options is to halve the current greatest number in the array. This is our greedy algo.

```

[ 4 2 10 20 6 ] // 20 is our greatest number and 2 is our smallest number
    ^    ^

dev = 20 - 2 = 18

// halve 20

[ 4 2 10 10 6 ] // 10 is our greatest number and 2 is our smallest number
    ^  ^

dev = 10 - 2 = 8

// halve 10

[ 4 2 5 10 6 ] // 10 is our greatest number and 2 is our smallest number
    ^   ^

dev = 10 - 2 = 8

// halve 10

[ 4 2 5 5 6 ] // 6 is our greatest number and 2 is our smallest number
    ^     ^

dev = 6 - 2 = 4

// halve 6


[ 4 2 5 5 3 ] // 5 is our greatest and 2 is our smallest
    ^   ^

dev = 5 - 2 = 3

// our greatest number, 5, is odd. We can no longer halve it


dev = 3
```

After halving the current greatest number in the array we would want to put in back in the array and take the new greatest number in the array. We need to do this since halving the greatest number may cause another number to take its place.

Now that we know the procedure of the greedy algorithm, we'll need a way to keep track of the min and max numbers of an array. This can be done several ways:

Iterating:

After halving the greatest number, we can iterate over the array to take the greatest and smallest number

Sorting:

After halving the greatest number, we can re-sort the so that smallest and greatest number will be at both ends of the array

Max Heap:

After halving the greatest number which is at the top of the heap, we can push the halved number back into the heap and take the next greatest number which will be at the top of the heap. In doing this we'll still need to keep track of the smallest number.

Time: `O(n * log n * log m)` Where `n` is the length of the array and `m` is the value of the largest even number

Space: `O(n)`

- [JavaScript](./minimize-deviation-in-array.js)
- [TypeScript](./minimize-deviation-in-array.ts)
- [Java](./minimize-deviation-in-array.java)
- [Go](./minimize-deviation-in-array.go)
</details>
