# Roman to Integer

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
```

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9.
- X can be placed before L (50) and C (100) to make 40 and 90.
- C can be placed before D (500) and M (1000) to make 400 and 900.
  Given a roman numeral, convert it to an integer.

### Example 1

```
Detailed example
```

### Example 2

```
Detailed example
```

### Constraints

`1 <= s.length <= 15`

`s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').`

`It is guaranteed that s is a valid roman numeral in the range [1, 3999].`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Reverse Traversal

With Roman numerals characters are sorted from greatest value to smallest value with the exception of `IV`, `IX`, `XL`, `XC`, `CD`, `CM`. In these cases we subtract the value of the right character from the left character. If we do a reverse traversal we can peek at the next character. If the next character is greater or equal to the current character then we can count the current character as its full value. If the next character is smaller then the current then would subtract the value of the next value from the current value and count the two characters as one number.

```
sum = 0

M C M X C I V  // character preceding `V` is of smaller smaller value. Add V - I to the sum
      ^ ^

sum = 94

M C M X C I V  // character preceding `C` is of smaller smaller value. Add C - X to the sum
      ^ ^

sum = 994

M C M X C I V  // character preceding `M` is of smaller smaller value. Add M - C to the sum
  ^ ^

sum = 1994

M C M X C I V
^
```

- [JavaScript](./roman-to-integer.js)
- [TypeScript](./roman-to-integer.ts)
- [Java](./roman-to-integer.java)
- [Go](./roman-to-integer.go)

</details>
