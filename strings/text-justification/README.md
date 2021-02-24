# Text Justification

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem

Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

- A word is defined as a character sequence consisting of non-space characters only.
- Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
- The input array words contains at least one word.

### Example 1

```
Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
```

### Example 2

```
Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified becase it contains only one word.
```

### Example 3

```
Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
```

### Constraints

`1 <= words.length <= 300`

`1 <= words[i].length <= 20`

`words[i] consists of only English letters and symbols.`

`1 <= maxWidth <= 100`

`words[i].length <= maxWidth`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Group words and Justify

The first and most important thing to do is to group the group by which line they they will be addded to.

A length of a line can be calculated as the total sum of the length of the words plus one spaces for boundaries between words

```
["This", "is"] // total length of all word: 6


"This is" // word boundaries are defined as space between words
     ^

6 + 1 = 7 // total line length
```

This can be simplified as `subarray(words[i], words[j] (non-inclusive)) + i - j` where `i, j` the boundaries of a `words` subarray with `j` being non-inclusive. A temporary list can also be be used to store the words for every line. In this case the total length of a line would be calculated as `L + list.size - 1` Where `L` is the total length of all the strings in the list.

```
i = 0
j = 3

["This", "is", "an", "example", "of", "text", "justification."] // total length of words in subarray i, j: 8
   ^                   ^

8 + (3 - 0 - 1) = 10 // total line length
```

or

```

list = ["This", "is", "an"] // total length of all words: 8

list.size = 3

8 + (3 - 1) = 10 // total line length
```

As we try to group words together we need to make sure that adding the next word would not cause the line length to go over the `maxWidth`

If the line length if less than `maxWidth` then there will be extra space that will have to be included in the line. This can be defined as `totalLineLength - maxWidth`. Where these extra space is dependent on how the line is to be justified. The problem states that every line expect the last one should be justified with space evenly spread between word boundaries. If spaces do not evenly divide between boundaries, boundaries to the left should get the most spaces. Lines with one word would get justified to the left with extra spaces appending on to the right.

```
"This", "is", "an"

maxWidth = 16

lineLength = 10

extraSpaces = 6

boundaries = 2

extraSpace / boundaries = 3 // 3 extra spaces will added in between words

"This    is    an" // 4 spaces added between word boundaries
```

In the case where extra spaces do not evenly divided `extraSpaces % boundaries` number of spaces will filled in between words from left to right.

As all line are built they will be added into a final list one by one.

Time: `O(maxWidth / L * maxWidth)` where `L` is the average length of the words in `words`

Space: `O(maxWidth / L * maxWidth)` Including the result list

- [JavaScript](./text-justification.js)
- [TypeScript](./text-justification.ts)
- [Java](./text-justification.java)
- [Go](./text-justification.go)

</details>
