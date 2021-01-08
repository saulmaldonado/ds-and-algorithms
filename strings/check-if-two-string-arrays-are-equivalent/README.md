# Check If Two String Arrays Are Equivalent

## Difficulty

<!-- choose one -->

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

<!-- any examples -->

### Example 1:

```
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
```

### Example 2:

```
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
```

### Example 3:

```
Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
```

### Constraints

`1 <= word1.length, word2.length <= 103`

`1 <= word1[i].length, word2[i].length <= 103`

`1 <= sum(word1[i].length), sum(word2[i].length) <= 103`

`word1[i] and word2[i] consist of lowercase letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

For the solution one can concat all of the substring of each array and compare the strings in the end. This works but at the cost O(n) space and up tom O(n) time for string concatenations

A 4 pointer method here can work where two pointers can traverse the both arrays and two inner pointers can traverse the substrings. We would then compare the to inner pointer to make sure every character is the same and in order. If there is ever a mismatch in character, the strings are not the same and the function can return false.

Keeping tracker of the 4 pointers is the tricky part. We want to increment the outer pointers to the next string in the array every time the inner pointers reaches the end of the current strings and we want the to 2 inner and outer pointers to be independent of each other since the arrays and substring can be of different length.

We initialize two pointers at the beginning of both arrays and two inner pointers that start at the beginning of the first string in each array. We can also use a while loop that can check if either outer pointer has reached the end of its array.

For every loop, we want to get the current string pointed at in `word1` and `word2`. We then use the inner pointers to retrieve the current character of the string and compare both.

```
i = 0
a = 0

j = 0
b = 0

["ab", "c"], word1[i][a] = a
  ^
  ^
["a", "bc"] word2[j][b] = a
  ^
  ^

```

We would then increment the two inner pointers and repeat the process.

If either of the inner pointer goes out of bounds of their current string, increment the outer pointer to the next string in the array and reset the inner pointer to point to the first character of the next string

```
i = 0
a = 1

j = 1
b = 0

["ab", "c"], word1[i][a] = b
   ^
  ^
["a", "bc"] // word[j][b] = b
       ^
       ^

```

We would then repeat these operations until one of the outer pointer reaches the outside of their array and the loop is terminated

To make sure that both of the string have been fully traverse and no one array of string has extra strings or characters, we would check if both of the outer pointers are at the end of their arrays

<!-- solution explanation -->

<!-- relative links to solution files. {title} should be replaced with the name of the problem in `kebab-case` -->

- [JavaScript](./check-if-two-string-arrays-are-equivalent.js)
- [TypeScript](./check-if-two-string-arrays-are-equivalent.ts)
- [Java](./check-if-two-string-arrays-are-equivalent.java)
- [Go](./check-if-two-string-arrays-are-equivalent.go)
</details>
