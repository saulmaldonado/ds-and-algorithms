# Longest Common Prefix

![difficulty](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

### Example 1:

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

### Example 2:

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

### Constraints

`0 <= strs.length <= 200`

`0 <= strs[i].length <= 200`

`strs[i] consists of only lower-case English letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation:

Check that every _ith_ character of every string is the exact same. Once you reach the first non-matching _ith_ character you can concluded that substring from _beginning_ to _`i` (non-inclusive)_ of every string is the exact same. You can also instead reach the end of the shortest string for which you can say that substring from _beginning_ to _`min(strs).length` (non-inclusive)_ of every string is the exact same. In the case that all string are the exact same you can return the first string.

- [JavaScript](/longest-common-prefix.js)
- [TypeScript](/longest-common-prefix.ts)
- [Java](/longest-common-prefix.java)
- [Go](/longest-common-prefix.go)
</details>
