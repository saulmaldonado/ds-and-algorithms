# Edit Distance

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character

### Example 1

```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

### Example 2

```
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation:
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

### Constraints

`0 <= word1.length, word2.length <= 500`

`word1 and word2 consist of lowercase English letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Dynamic Programming

We can make the problem easier by breaking it down into smaller sub problems. Staring with two empty strings `word1 = "", word2 = ""` we know that both strings are the same and require 0 operations. We can say that the minimum operations needed to transform `word1.substring(0,0)` to `word2.substring(0,0)` is 0

we can find the minimum number of operations to get `word1` to `word2` by comparing our options

```
word1 = "horse", word2 = "ros"

"", "" // strings are the same, 0 operations

"h", "" // remove h, 1 operation

"", "r" // add r, 1 operation

// find the min operations needed to get "h" to "r"

"h", "r" // replace h with r, find the min operations for word1.substring(0, 0) to word2.substring(0, 0) and add one

"", "r" // add r, find min operations from `word1.substring(0,1)` to `word2.substring(0,0)` ("h" to "") and add one

"ro", "r"// remove o, find min operations from `word1.substring(0, 1)` to word.substring(0,2) ("h" to "ro") and add one

```

We can use dynamic programming to store the minimum operations for these sub-problems. A 2D matrix would work here where `dp[i][j]` indicates the minimum operations to get `word1.substring(0, i)` to `word2.substring(0, j)`.

If the last character of the to substrings are the same, then no operations are needed take the minimum for the previous operations. the min operations is `dp[i - 1][j - 1]`.

If the characters are not the same there, there are three operations we can make:

1. replacement, take the min of `dp[i - 1][j - 1]` and add one
2. removal, take the min of `dp[i - 1][j]` and add one
3. replacement, take the min of `dp[i][j - 1]` and add one

Getting all the possible minimum operations for every possible combinations of substrings, we will find the minimum operations to make `word1.substring(0, word1.length)` into `word2.substring(0, word2.length)` at `dp[word1.length][word2.length]`

Time: `O(N*M)` Where `N` is the length of `word1` + 1 and `M` is the length of `word2` + 1

Space: `O(N*M)`

- [JavaScript](./edit-distance.js)
- [TypeScript](./edit-distance.ts)
- [Java](./edit-distance.java)
- [Go](./edit-distance.go)

</details>
