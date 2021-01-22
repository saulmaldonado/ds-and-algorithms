# Determine if Two Strings Are Close

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Two strings are considered close if you can attain one from the other using the following operations:

- Operation 1: Swap any two existing characters.
  For example, abcde -> aecdb
- Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
  For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
  You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

### Example 1:

```
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
```

### Example 2:

```
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
```

### Example 3:

```
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
```

### Example 4:

```
Input: word1 = "cabbba", word2 = "aabbss"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any amount of operations.
```

### Constraints

`1 <= word1.length, word2.length <= 105`

`word1 and word2 contain only lowercase English letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

There are a couple of rules that both strings have to follow to be able to be considered **close**.

1. Both string must be of same length. None of the operations allow us to remove or add character to any string.

2. Both string must must only contain the same type of characters. None of the operations allow us to remove existing type of characters or add new types of characters that are not already in the strings.

3. Both string must have the same frequencies of different characters. Operation 2 allows us to switch the frequency of one character with the frequency of another character. If both string have different frequencies of characters, there are no amount of operations 2's we can make so that they are both equivalent.

All we have to do check that the string pass these rules, we don't actually have to preform the operations.

Rule 1:

Before we can start anything else, the simplest check we can make is the check for equal lengths. If the lengths differ, we can return false.

Rule 2:

We have to check that both string only contain at least of the same types of character. We can do this by building Set of all different character for both string and comparing both. If the sets differ, we can return false.

Rule 3:

We have to build freq maps for each word.

```
word1 = "cabbba" word2 = "abbccc"

word1 = {
  c: 1
  a: 2
  b: 3
}

word2 = {
  a: 1
  b: 2
  c: 3
}
```

Operation 2 allows us to "Transform every occurrence of one existing character into another existing character and do the same with the other character.". This means we can switch the frequencies of one character for another. Once we can get both strings to be equivalent, or both string to be constructed using the same characters not in any particular order, we can perform as many Operations 1's as we need for both string to be the exact same.

For this to work, we need to make sure that both maps have the same values. Operations 2 allows up to switch the keys for values, but we are not allows to changes the actually values themselves. We can do this getting an array of values for each map, sorting them, and comparing the arrays making they are both the exact same.

As an optimization, we can use arrays of length 26, representing every character in the lowercase alpha, instead of sets and maps.

Time: O(n) // sorting here is a constant O(26 log 26), 26 representing every letter in the alphabet. n in this problem representing the length of the string

Space: O(26) // 26 representing all 26 possible lowercase characters of the alphabet

- [JavaScript](./determine-if-two-strings-are-close.js)
- [TypeScript](./determine-if-two-strings-are-close.ts)
- [Java](./determine-if-two-strings-are-close.java)
- [Go](./determine-if-two-strings-are-close.go)
</details>
