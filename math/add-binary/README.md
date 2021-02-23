# Add Binary

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given two binary strings a and b, return their sum as a binary string.

### Example 1

```
Input: a = "11", b = "1"
Output: "100"
```

### Example 2

```
Input: a = "1010", b = "1011"
Output: "10101"
```

### Constraints

`1 <= a.length, b.length <= 10^4`

`a and b consist only of '0' or '1' characters.`

`Each string does not contain leading zeros except for the zero itself.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Long Addition

Note that since the length of the binary numbers can be at most `10,000` which is well beyond the size of an `int` or `long`, we can't simply convert the strings to numbers.
Similar to long addition with decimal numbers, we can add together individual digits without having to convert the entire string to a number.

We will start from the ends of both string and add together digits in the same place in pairs and push the sum one by one into a Character array or StringBuilder. Similar to decimal addition, we will carry over digit sums of `2` or more to the next place

```
"1010" "1011"
    ^      ^
"1"

"1010" "1011"
   ^      ^
"01"

"1010" "1011" // carry over 1 from previous sum
  ^      ^
"101"

"1010" "1011"
 ^      ^
"0101"

// Add remaining carry over from previous sum

"10101"
```

Time: `O(max(M, N))` Where `M` and `N` are the lengths of the strings

Space: `O(max(M, N) + 1)`

- [JavaScript](./add-binary.js)
- [TypeScript](./add-binary.ts)
- [Java](./add-binary.java)
- [Go](./add-binary.go)

</details>
