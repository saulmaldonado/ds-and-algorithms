# Length of Last Word

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

### Example 1

```
Input: s = "Hello World"
Output: 5
```

### Example 2

```
Input: s = " "
Output: 0
```

### Constraints

`1 <= s.length <= 104`

`s consists of only English letters and spaces ' '.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Count Letters From the End

To find the length of the last word, we'll first need to find where the last ends. This will always be the first non-whitespace character from the end of the string. From there on we'll count all the non-whitespace character that before afterwards until we come across the next whitespace **or** the beginning of the string. The resulting count will be the length of the last word. If the there are no words at all, the count will be 0

```
"Hello World "
            ^ // whitespace

count = 1
"Hello World "
           ^ // first non-whitespace, start counting

count = 2
"Hello World "
          ^

count = 3
"Hello World "
         ^

count = 4
"Hello World "
        ^

count = 5
"Hello World "
       ^

count = 5
"Hello World "
      ^       // the next whitespace, this denote the end of the last word.
```

- [JavaScript](./length-of-last-word.js)
- [TypeScript](./length-of-last-word.ts)
- [Java](./length-of-last-word.java)
- [Go](./length-of-last-word.go)

</details>
