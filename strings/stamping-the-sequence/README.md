# Stamping The Sequence

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem

You want to form a target string of lowercase letters.

At the beginning, your sequence is target.length '?' marks. You also have a stamp of lowercase letters.

On each turn, you may place the stamp over the sequence, and replace every letter in the sequence with the corresponding letter from the stamp. You can make up to 10 \* target.length turns.

For example, if the initial sequence is "?????", and your stamp is "abc", then you may make "abc??", "?abc?", "??abc" in the first turn. (Note that the stamp must be fully contained in the boundaries of the sequence in order to stamp.)

If the sequence is possible to stamp, then return an array of the index of the left-most letter being stamped at each turn. If the sequence is not possible to stamp, return an empty array.

For example, if the sequence is "ababc", and the stamp is "abc", then we could return the answer [0, 2], corresponding to the moves "?????" -> "abc??" -> "ababc".

Also, if the sequence is possible to stamp, it is guaranteed it is possible to stamp within 10 \* target.length moves. Any answers specifying more than this number of moves will not be accepted.

### Example 1

```
Input: stamp = "abc", target = "ababc"
Output: [0,2]
([1,0,2] would also be accepted as an answer, as well as some other answers.)
```

### Example 2

```
Input: stamp = "abca", target = "aabcaca"
Output: [3,0,1]
```

### Constraints

`1 <= stamp.length <= target.length <= 1000`

`stamp and target only contain lowercase letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

If we are trying to construct `target` out of a series of substrings of `stamp` then we can instead work backwards to find substrings of `stamp` in `target`. Substrings of `stamp` all must be the same length so instead of removing characters to create a substring we will replace them with `?`

```
"abc"
"?bc"
"ab?"
"a??"
"?b?"
"??c"
```

##### Implementation

We will go through `target` and windows of `stamp.length` that we can use our stamp on. If we find an area we can use our stamp based on the possible stamps we can use we will add the indices of our window to the result array. To stamp the part of the string we will convert the letter in the window to `?`

```
stamp = "abc"
target = "ababc"
            ^ ^

stamp...

"ab???"
```

If by the end of checking the string and the string is not fully stamped we will go throught it again. If the strings has been previously stamped then the string has changed and we can use different stamps on it

```
stamp  = "abc"
target = "ab???" // we can use stamp "ab?"

stamp...

"????"
```

If the string has not changed then stamping the entire string is impossible

Time: `O(N * (N / M))` Where `N` is the length of target and `M` is the length of `stamp`

Space: `O(N * 2)`

- [JavaScript](./stamping-the-sequence.js)
- [TypeScript](./stamping-the-sequence.ts)
- [Java](./stamping-the-sequence.java)
- [Go](./stamping-the-sequence.go)

</details>
