# Letter Combinations of a Phone Number

## Difficulty

<!-- choose one -->

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

### Example 1:

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

### Example 2:

```
Input: digits = ""
Output: []
```

### Example 2:

```
Input: digits = "2"
Output: ["a","b","c"]
```

### Constraints

`0 <= digits.length <= 4`

`digits[i] is a digit in the range ['2', '9'].`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

We can use recursion to create every combinations of letters for the given digit string.

For every call to the recursive function, we will loop through the letters possible for the first digit of the `digits` string. We will pass down letter combinations string and concat a new letter to it, for the `digits` string we will only pass down a substring from index `1` to the end. This will go one until there are no more characters in the `digits` string and we will add the current `combination` string to our answer list.

```
"23"
 ^
"abc"
 ^
""
------------------
"3"
 ^
"def"
 ^
"a"
------------------
""
""
"ad" <- insert in our ans
------------------

"3"
 ^
"def"
  ^
"a"
------------------
""
""
"ae" <- insert in our ans


...
```

- [JavaScript](./letter-combinations-of-a-phone-number.js)
- [TypeScript](./letter-combinations-of-a-phone-number.ts)
- [Java](./letter-combinations-of-a-phone-number.java)
- [Go](./letter-combinations-of-a-phone-number.go)
</details>
