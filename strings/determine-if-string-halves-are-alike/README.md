# Determine if String Halves Are Alike

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

### Example 1

```
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
```

### Example 2

```
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
```

### Constraints

`2 <= s.length <= 1000`

`s.length is even.`

`s consists of uppercase and lowercase letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Implementation

Have two pointers and two counters. The first pointer will traverse over the first half of the string from characters `[0...n / 2)` and will increment the first counter when a vowel is found.
The second pointer will traverse the second half of the string from character `[n / 2...n)` and will increment the second counter when a vowel is found. Once at the end of the string both of the counters will be compared.

To check if the character at a pointer is a vowel, we will have a helper function that will check if the lower case version of the character matches anyone of the lower case vowel.

```
1st = 0
2nd = 1

book
^ ^

1st = 1
2nd = 1

book
 ^ ^
```

Time: `O(N)` Where N is the length of `s`
Space: `O(1)`

- [JavaScript](./determine-if-string-halves-are-alike.js)
- [TypeScript](./determine-if-string-halves-are-alike.ts)
- [Java](./determine-if-string-halves-are-alike.java)
- [Go](./determine-if-string-halves-are-alike.go)

</details>

determine-if-string-halves-are-alike
