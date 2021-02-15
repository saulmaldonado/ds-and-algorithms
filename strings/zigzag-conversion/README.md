# ZigZag Conversion

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

### Example 1

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

### Example 2

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

### Example 3

```
Input: s = "A", numRows = 1
Output: "A"
```

### Constraints

`1 <= s.length <= 1000`

`s consists of English letters (lower-case and upper-case), ',' and '.'.`

`1 <= numRows <= 1000`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Sort By Line

If we sort the characters of every line into different arrays (or StringBuilders), then once all the characters are sorted we can append the sorted characters groups next to each other.

```
"PAYPALISHIRING"

{
  0: [P A H N],
  1: [A P L S I I G],
  2: [Y I R]
}
```

But to do so we need a way to iterate over the string while keeping track of where to put the next character. We can do so by having a pointer that represents the next array to insert the next character. To emulate the zig zag traversal we'll have it iterate forwards until it reaches the last list or `numRows - 1` which then we'll reverse its direction to iterate back to `0`. Once it reaches index `0` we'll reverse it again to iterate forwards

```
"PAYPALISHIRING"
 ^
{
  0: [P], <-
  1: [],
  2: []
}

"PAYPALISHIRING"
  ^
{
  0: [P],
  1: [A], <-
  2: []
}

"PAYPALISHIRING"
   ^
{
  0: [P],
  1: [A],
  2: [Y] <-
}

"PAYPALISHIRING"
    ^
{
  0: [P],
  1: [A P], <-
  2: [Y]
}

"PAYPALISHIRING"
     ^
{
  0: [P A], <-
  1: [A P],
  2: [Y]
}

"PAYPALISHIRING"
      ^
{
  0: [P A],
  1: [A P L], <-
  2: [Y]
}
...
```

Time: `O(N)` Where `N` is the length of the string

Space: `O(N)`

- [JavaScript](./zigzag-conversion.js)
- [TypeScript](./zigzag-conversion.ts)
- [Java](./zigzag-conversion.java)
- [Go](./zigzag-conversion.go)

</details>
