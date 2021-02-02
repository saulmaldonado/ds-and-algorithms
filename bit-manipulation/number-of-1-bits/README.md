# Number of 1 Bits

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

- Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above, the input represents the signed integer. -3.

Follow up: If this function is called many times, how would you optimize it?

### Example 1:

```
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
```

### Example 2:

```
Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
```

### Example 3:

```
Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
```

### Constraints

`The input must be a binary string of length 32`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Right Shifting

Right shifting will shift all of the bits down to the right and filling the left side with `0` and discarding the right most bit.

We can shift the bits of the number to the right until the number becomes `0`, or when the number has no more `1`s, counting the number of times the ones place contains a one `n & 1 == 1`

```
count = 0
1110
   ^
// shift right

count = 1
0111
   ^
// shift right

count = 2
0011
   ^
// shift right

count = 3
0001
   ^
// shift right

count = 3
0000
   ^
// shift right
```

Time: `O(32)` Worst case 32 operations with numbers where the first and last bits are `1`

Space: `O(1)`

#### Flipping the Least Significant Bit

Our main bottle neck with the previous solution is having to a minimum of `position of the most significant bit` - `position of the least significant bit` + `1` number of operations. For example:

```
2147483649 = 10000000000000000000000000000001
```

This number has its most significant bit at the 31st position and its least significant bit at the 0th position. Even though there are only two `1` bits in the number, we would still have to do a total of `32` operations.

Instead shift bits to the right, we can flip the least significant bit to `0` until the number becomes 0. That way we can count the number of flips done as the number of `1` bits. For example:

```
count = 0
10000000000000000000000000000001 // flip the least significant bit
                               ^

count = 1
10000000000000000000000000000000 // flip the least significant bit
^

count = 3
00000000000000000000000000000000
```

Flipping the least significant bit to `0` can be simple as subtracting 1 but in most cases this also causes other bits to flip from `0` to `1`. For example:

```
3 = 11 // subtract one to flip the least significant bit

2 = 10 // subtract one to flip the least significant bit

1 = 01 // here this bit in the ones place is flipped to 1!
```

Subtracting one will flip the least significant bit like we want, it will also flip all the other bit to the right of it to `1`. For example:

```
16 = 10000 // subtract one
     ^
15 = 01111 // all of the bits to the right are now 1
     ^
```

We'll need a way to flip the bits back to `0` and we can do that using the `&` operator.

We know that the `&` operator will flip bits to `0` that are not `1` in both numbers. For example:

```
1111
 &
1001
 =
1001
```

We can use the operator to flip all bits to the right back to `0`

```
24   =   11000
           &
24 - 1 = 10111
           =
         10000
```

Time: `O(32)` Worst case 32 operations with **ONLY** number `2^32`

Space: `O(1)`

- [JavaScript](./number-of-1-bits.js)
- [TypeScript](./number-of-1-bits.ts)
- [Java](./number-of-1-bits.java)
- [Go](./number-of-1-bits.go)
</details>
