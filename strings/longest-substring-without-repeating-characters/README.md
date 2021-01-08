# Longest Substring Without Repeating Characters

## Difficulty

<!-- choose one -->

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given a string s, find the length of the longest substring without repeating characters.

<!-- any examples -->

### Example 1:

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2:

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3:

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Example 4:

```
Input: s = ""
Output: 0
```

### Constraints

`0 <= s.length <= 5 * 104`

`s consists of English letters, digits, symbols and spaces.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

the [Sliding Window](https://www.geeksforgeeks.org/window-sliding-technique/) can be applied to this problem to find substring of all unique characters

Two pointers can start at the beginning of the string, one `slow` one `fast`. The fast pointer will determine the beginning of the substring and the slow pointer can be the end.
The fast pointer can iterate over the string one character at a time while the slow pointer can stay at its position. This will increase the length of the substring. When the `fast` pointer comes across a character that is already seen the slow pointer with move its position until the last occurrence of the same character is excluded from the string.

Example:

```
"abcabcbb"
  ^ ^
fast = 3
slow = 1
// Every time a repeated character is encountered, increment slow until the last occurrence of the character is excluded
```

Keeping track of what characters are already in the current substring `s.substring(slow, fast + 1)` without having to build the string every iteration and search for characters, can be done with a HashMap keys of seen character and their last seen position in the string. To go even further the Map can contain the next index the slow pointer has the be at the exclude the character

Example:

```
"abc"
map = {
  a: 1, // 1 is the next position the slow pointer has to be to exclude the last occurrence of the 'a'
  b: 2,
  c: 3
}
```

In the case for repeated characters that have last occurred before the index of the `slow` pointer, we can take the greater of the current index of `slow` and the `index + 1` of the last occurrence in the HashMap to reassign our slow pointer. This will prevent any backtracking of the `slow` pointer

```
"abba"
    ^
    slow = max(map[a], slow) or max(1, 3)
map = {
  a: 1
  b: 2
}


```

For every change in the `fast` pointer we can calculate the current length of the sub string by `fast - slow + 1`. We can use that to reassign the max length of the _longest substring without repeating characters_ with the greater of the current substring length and its own length

```
maxLength = max(fast - slow + 1, maxLength)
```

Once `fast` finishes iterating over the entire string we can return the `maxLength`

<!-- relative links to solution files. {title} should be replaced with the name of the problem in `kebab-case` -->

- [JavaScript](./longest-substring-without-repeating-characters.js)
- [TypeScript](./longest-substring-without-repeating-characters.ts)
- [Java](./longest-substring-without-repeating-characters.java)
- [Go](./longest-substring-without-repeating-characters.go)
</details>
