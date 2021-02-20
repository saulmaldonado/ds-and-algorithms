# Minimum Remove to Make Valid Parentheses

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

- It is the empty string, contains only lowercase characters, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.

### Example 1

```
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
```

### Example 2

```
Input: s = "a)b(c)d"
Output: "ab(c)d"
```

### Example 3

```
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
```

### Example 4

```
Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"
```

### Constraints

`1 <= s.length <= 10^5`

`s[i] is one of '(' , ')' and lowercase English letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Prefix and Suffix Brackets

For a closing parentheses, `)`, to be balanced there needs to be at least one open opening parentheses in its prefix

```
( a b ) c // there is one opening parentheses in the prefix of the closing parentheses
^     ^
```

For a closing parentheses, `(`, to be balanced there needs to be at least one open closing parentheses in its suffix

```
( a b ) c  // there is one opening parentheses in the suffix of the opening parentheses
^     ^
```

If we want to be able to remove parentheses that do not have a corresponding parentheses to balance itself with, then we'll need to traverse the string to two ways. Forwards to find any `)` that cannot be balanced and backwards to find any `(` that cannot be balanced.

```
->

a ) b ( c ) d
^

a ) b ( c ) d // this closing parentheses does not have an opening, exclude ig
  ^

a ) b ( c ) d
    ^

a ) b ( c ) d // keep track of the opening parentheses to pair with a closing
      ^

a ) b ( c ) d
        ^

a ) b ( c ) d // pair this with the unpaired opening parentheses in its prefix
          ^

a ) b ( c ) d
            ^
```

Since deleting a character from a list, StringBuilder, or array requires shifting elements, we will instead mark the character as `*` to be excluded when rebuilding the string

Time: `O(N)` Where `N` is the length of the string

Space: `O(N)` Extra space is needed convert the string into an array and to rebuild the string without unbalanced parentheses

- [JavaScript](./minimum-remove-to-make-valid-parentheses.js)
- [TypeScript](./minimum-remove-to-make-valid-parentheses.ts)
- [Java](./minimum-remove-to-make-valid-parentheses.java)
- [Go](./minimum-remove-to-make-valid-parentheses.go)

</details>
