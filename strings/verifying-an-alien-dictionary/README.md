# Verifying an Alien Dictionary

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

### Example 1

```
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
```

### Example 2

```
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
```

### Example 3

```
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
```

### Constraints

`1 <= words.length <= 100`

`1 <= words[i].length <= 20`

`order.length == 26`

`All characters in words[i] and order are English lowercase letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

In the ASCII table the lowercase letters of the alphabet are sorted `a-z` with character codes `97-122`. We can replicate the same with the alien alphabet by creating a table that will store the codes for each letter in the alien alphbet depending on their order. We can then use that tabel to check if the string are lexigraphically sorted.

##### Implementation

To create a table we can use a hash map of size `26` to represent all letter in the alphabet. Their key will be the character and their place will be their value. Since we can cast our characters to integers, we can also use an array of size `26` Where the index is the character code in the original alphabet, the content at `i` is its place in the alien alphabet

```
alien = "hlabcdefgijkmnopqrstuvwxyz"
map = {
  "a": 2,
  "b": 3,
  "c": 4,
  "d": 5,
  ...
}


map = [2 3 4 5 ...]

// with an array, `map['a']` is the place of 'a' in the alien alphabet.
```

Now to check the ordering of the strings we would need to check the characters of one string with the character of the next string.

To check lexicographic ordering:

1. The string's length must be equal to or less than the length of the next string

2. Every `s1[i]` must be less than or equal to `s2[i]`

3. If `s1` is a prefix of `s2` and `s2` is longer, `s1` is sorted

Time: `O(N * M)`

Space: `O(26)`

- [JavaScript](./verifying-an-alien-dictionary.js)
- [TypeScript](./verifying-an-alien-dictionary.ts)
- [Java](./verifying-an-alien-dictionary.java)
- [Go](./verifying-an-alien-dictionary.go)

</details>
