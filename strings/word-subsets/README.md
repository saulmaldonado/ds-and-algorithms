# Word Subsets

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

We are given two arrays A and B of words. Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity. For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a.

Return a list of all universal words in A. You can return the words in any order.

### Example 1

```
Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
Output: ["facebook","google","leetcode"]
```

### Example 2

```
Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
Output: ["apple","google","leetcode"]
```

### Example 3

```
Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
Output: ["facebook","google"]
```

### Example 4

```
Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
Output: ["google","leetcode"]
```

### Example 5

```
Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
Output: ["facebook","leetcode"]
```

### Constraints

`1 <= A.length, B.length <= 10000`

`1 <= A[i].length, B[i].length <= 10`

`A[i] and B[i] consist only of lowercase letters.`

`All words in A[i] are unique: there isn't i != j with A[i] == A[j].`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Frequency Maps

##### Intuition

We can ensure that every string in `B` is a subset of a string in `A` if the upper limit character frequency of all the strings in `B` are contained in the string from `A`. Since order here dosen't matter, we can simply compare character frequencies.

```
B = ["e","o"]

["facebook","google","leetcode"] // all of these string contain atleast one 'e' and 'o'
     ^  ^     ^   ^     ^  ^
```

##### Implementation

We'll need to construct a combined character frequency map for all of the string in `B`. Since are only 26 possible lowercase characters, we can use an frequency array instead. We'll use this to find if `A[i]` is _universal_

```
B = ["e","oo"]

{
  "e": 1,
  "o": 2
}

or

[0 0 0 0 1 0 0 0 0 0 0 0 0 0 2 0 0 0 0 0 0 0 0 0 0 0]
```

For every string in A, `A[i]`, we'll need to find its character frequency as well. Then we can compare the character frequency of `A[i]` and the combined character frequency of `B`. If any character in `B` is non-existent in `A[i]`, then `A[i]` is not _universal_. If the a character from `B` is included in `A[i]` but its frequency in `A[i]` is less than its frequency in `B`, then `A[i]` can't account for **multiplicity**.

```
B = ["e","oo"]
A[i] = "facebook"

{
  "f": 1,
  "a": 1,
  "c": 1,
  "e": 1, // matches frequency in B
  "b": 1,
  "o": 2, // matches frequency in B
  "k": 1
}
```

Time: `O(A + B)` Where `A` and `B` are the total number of characters in the string `A` and `B`

Space: `O(A.length)` Where `B` is the length of A

- [JavaScript](./word-subsets.js)
- [TypeScript](./word-subsets.ts)
- [Java](./word-subsets.java)
- [Go](./word-subsets.go)

</details>
