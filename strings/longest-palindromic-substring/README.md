# Longest Palindromic Substring

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given a string s, return the longest palindromic substring in s.

### Example 1:

```
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

### Example 2:

```
Input: s = "cbbd"
Output: "bb"
```

### Example 3:

```
Input: s = "a"
Output: "a"
```

### Example 4:

```
Input: s = "ac"
Output: "a"
```

### Constraints

`1 <= s.length <= 1000`

`s consist of only digits and English letters (lower-case and/or upper-case),constraints`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Two pointers expand from middle

This method checks for palindromes by starting two pointers at some midpoints or points, and expanding both checking that the characters at both pointers are the same.

```
Example for odd length strings:

    babad
i     ^
j     ^

s[i] = 'b'
s[j] = 'b'
// both are the same, decrement i and increment j

    babad
i    ^
j      ^

s[i] = 'a'
s[j] = 'a'
// both are the same, decrement i and increment j

    babad
i   ^
j       ^

s[i] = 'b'
s[j] = 'd'
// both are not the same, the longest substring length is i - j - 1 "aba"
```

```
Example for even length strings

Instead off starting at the same position, both pointers start next to each other

    cbbd
i    ^
j     ^

s[i] = b
s[j] = b
// both are the same, decrement i and increment j

    cbbd
i   ^
j      ^

s[i] = c
s[j] = d

// both are not the same, the longest substring length is i - j - 1 "bb"
```

For every character in `s`, we can find the longest substring we can build with off of `s[i]`. We have to take into account that there are two different types of palindromes, odd length palindromes are built off of a single midpoint, even length palindromes are built off of two midpoints next to each other. We can use a helper method that will find the longest palindromic substring off of `s[i]`. The helper method will take the starting positions of the two pointers. We'll need to call this method twice. Once where both pointers start at the same position `i`, and once where both pointer start next to each other `i` and `i + 1`. This will take into account for even and odd length substrings.

After getting back the lengths of both method calls we can take the max and compare that to the running max length palindromic substring of s. If our new length is greater, we can find the starting point and ending point of our new substring by `start = i - (len - 1) / 2` and `end = i + len / 2`.

Once we have iterated over the string `s` we will return a `s.substring(start, end + 1)`

#### Manacher's Algorithm

The main problem with the two pointer approach is having to build the longest possible palindromes for every `s[i]`. This can cost up to O(n^2). A majority of these operations involve traversing over the same characters multiple times so we can bring down the number of operations done by using extra space to form a sort of "dynamic programming" approach.

Consider an odd length palindrome

```
abababa
```

In the previous solution we've established that if we start two pointer in the middle of a string and as we move both pointers outwards we find the exact same characters at both pointers, we have a palindrome

```
a b a b a b a
^ ^ ^   ^ ^ ^
```

We can interpret this as a string that reflects across the middle character. We can proves this by splitting the array and comparing the two halves.

```
    a b a | b | a b a
      /            \
  a b a            a b a
```

This means if we can build palindromes off of characters in the left half of the string, we can build the same palindrome of the same length on the other reflected side of the string. To prove this we will build a palindrome off of one character and try to build the same palindrome on the left side

```
a b a | b | a b a
|___^_______|         // here we built a palindrome off of a character on the left side of the string
"ababa"

a b a | b | a b a
    |_______^___|     // we built the same palindrome of the same character at the reflected position on the right side
    "ababa"
```

This means we can find the palindrome lengths off of some characters without having to build them repeatedly

```
 a b a b a b a
[1 3 5 7 0 0 0]
     ^   ^ // if we look at the reflected position, we can see we can build a palindrome of size 5 off of this character

 a b a b a b a
[1 3 5 7 5 0 0]
   ^       ^ // if we look at the reflected position, we can see we can build a palindrome of size 3 off of this character

 a b a b a b a
[1 3 5 7 5 3 0]
 ^           ^ // if we look at the reflected position, we can see we can build a palindrome of size 1 off of this character
```

This methods works but only for strings that we know are entirely palindromes. But we work off of this strategy with different strings.

First off, if we want to find the length of a palindrome off of a character using reflections, the character we are on has to be within a palindrome. Starting off we don't know that, but as we build palindromes off of characters, we can have pointers that denote the center and right edge of the last palindrome we've seen

```
[1]
 a b a b a b a // here the palindrome starts and ends at index 0
 ^
[1 3]
 a b a b a b a // here we cannot use reflection since the last seen palindrome starts and ends at 0, we have to build it manually
 ^ ^ ^

// below we can use reflection. the last seen palindrome started at 0 and ended at 2. for the character at index 2 all we have to do is look at its reflected position, 0. We can see that we can expand off of a palindrome length of one, so will do that
[1 3 5]
 a b a b a b a
 ^   ^   ^

[1 3 5 7]
 a b a b a b a // here we can use reflection, the character at index 3 has the same palindrome length of the character at index 1. We can then expand off of this length
 ^     ^     ^
```

Important take aways:

1. We can only use reflection on characters that are within the right boundary
2. If there are other characters left in the string, we can still build off of the reflection value

consider the following edge case:

```
  b a b a b a b a
    ^     ^ ^   ^
p [1 3 5 7 7 0 0 0]
```

if we look at the reflection of `p[5]` we find `7`. This is not correct and it is because our center palindrome does not include the first character `b`. We can instead find the starting length of `s[5]` by right edge index minus the current index.
This only works for indices after the center so we can use `min(reflection, right edge - index)` to find our starting length.

2. Even string lengths

We can make string more manageable by inserting `#` character in between
`#b#a#b#a#b#a#b#a#`

- [JavaScript](./longest-palindromic-substring.js)
- [TypeScript](./longest-palindromic-substring.ts)
- [Java](./longest-palindromic-substring.java)
- [Go](./longest-palindromic-substring.go)
</details>
