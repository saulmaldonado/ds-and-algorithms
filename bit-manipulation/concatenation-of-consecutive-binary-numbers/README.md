# Concatenation of Consecutive Binary Numbers

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 109 + 7.

### Example 1:

```
Input: n = 1
Output: 1
Explanation: "1" in binary corresponds to the decimal value 1.
```

### Example 2:

```
Input: n = 3
Output: 27
Explanation: In binary, 1, 2, and 3 corresponds to "1", "10", and "11".
After concatenating them, we have "11011", which corresponds to the decimal value 27.
```

### Example 3:

```
Input: n = 12
Output: 505379714
Explanation: The concatenation results in "1101110010111011110001001101010111100".
The decimal value of that is 118505380540.
After modulo 109 + 7, the result is 505379714.
```

### Constraints

`1 <= n <= 105`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

While string concatenations of binary strings for numbers `1...n` may seem like a viable solution for a smaller `n`, string concatenation for an `n` that can be up to `100,000` makes for an impossible solution

`100,000` has a binary string of `11000011010100000` with a length of `17`. The largest integer we can use is a `long` which contains `64` bits. Just trying to concat the first 4 numbers from `100,000`, `11000011010100000, 11000011010011111, 11000011010011110, 11000011010011101`, would cause an overflow.

Instead of trying to build the string and converting to a number, we need to build the number.

Bit manipulations works well for this problem since what we are trying to do involves concatenating two sets of bits or "pushing" one set of bits into another. We can achieve this using a left shift `<<`

`n = 3`

```
// 1 in 8 bits
00000001
```

If we want to be able concat our next number `2` to the end of the number, we want to shift the existing bits 2 to the left

```
// 4 in 8 bits
00000100
```

In doing so we increase the value of the number by `2^2` times its current value.

Now we can just add `2` to the current number to "push" the new bits in from the right

```
// 6 in 8 bits
00000110
```

We would do the same operations for the next number we want to concat, `3`

```

// 6 in 8 bits
00000110
```

Shift the bits to the left just enough to fit the next bits. In this case, we shift the bits `2` to the left

```
// 24 in 8 bits
00011000
```

In doing so we increase the value of the number by `2^2` times its current value to `24`.
Now we can just add `3` to the current number to "push" the new bits in from the right.

```
// 27 in 8 bits
00011011
```

This works but were are missing a way to know how many bits we need to shift the current number to the left just enough to fit in the bits of the next number. We can do this by making the following observation

For numbers 1 - 16, here are the numbers where the bit lengths change.

```
 1 // 1
10 // 2

 11 // 3
100 // 4

 111 // 7
1000 // 8

 1111 // 15
10000 // 16
```

Bit lengths only change when the bits of the current number are all set to `1`. When there are no other bits that can be switched to `1`, a bit of `1` is added to the beginning of the number and the reset of the bits are set to `0`
If we know our bitwise operators, we know we can detect when a change like this happens using the `&` operator.

Using the `&` operator two number will reveal what bits the two numbers have in common

```
011 // 3
 &
111 // 7
 =
011 // 3


011 // 3
 &
100 // 4
 =
000
```

We can see that using the `&` on numbers where bit length changes, the result will always be `0`

```
 1 // 1
 &
10 // 2
 =
00

 11 // 3
  &
100 // 4
 =
000

 111 // 7
  &
1000 // 8
  =
0000

 1111 // 15
  &
10000 // 16
  =
00000
```

we can use this to know when to increase the number of bits we need to shift to the left in order to concat the next bits.

```
i = 4

if((i & (i - 1)) == 0) {
    count++;
}
```

This still causes problems in a case where we want to shift `16` to the left `17` places. `16 + 17` bits would cause an overflow, but this could easily be remedied using a `long` to keep track of the sum and using `mod 1e9 + 7` every time calculate a new sum. This will make sure that our sum is always a 32 bit int but has enough room add new bits and mod down if needed

Time: `O(n)`

Space: `O(1)`

- [JavaScript](./concatenation-of-consecutive-binary-numbers.js)
- [TypeScript](./concatenation-of-consecutive-binary-numbers.ts)
- [Java](./concatenation-of-consecutive-binary-numbers.java)
- [Go](./concatenation-of-consecutive-binary-numbers.go)
</details>
