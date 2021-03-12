# Check If a String Contains All Binary Codes of Size K

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given a binary string s and an integer k.

Return True if every binary code of length k is a substring of s. Otherwise, return False.

### Example 1

```
Input: s = "00110110", k = 2
Output: true
Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indicies 0, 1, 3 and 2 respectively.
```

### Example 2

```
Input: s = "00110", k = 2
Output: true
```

### Example 3

```
Input: s = "0110", k = 1
Output: true
Explanation: The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring.
```

### Example 4

```
Input: s = "0110", k = 2
Output: false
Explanation: The binary code "00" is of length 2 and doesn't exist in the array.
```

### Example 5

```
Input: s = "0000000001011100", k = 4
Output: false
```

### Constraints

`1 <= s.length <= 5 * 10^5`

`s consists of 0's and 1's only.`

`1 <= k <= 20`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Count Unique Combinations Of Substrings With Sliding Window

For a binary number of `k` length there are a total of `2^k` different number we can represent with it. We know this because every bit can only be in one of `2` states

```
k = 3

"000"
"001"
"010"
"100"
"011"
"110"
"101"
"111"
```

Our goal is to find all `2^k` different substrings of `k` length in `s`. We can do this by using a sliding window of `k` length that we'll use to capture every substring of length `k` in `s`. We'll use this sliding window to iterate over `s` and take the substring `s.substring(left, right)` at every position until we reach the end `s`. To keep track of every unique substring we'll use a Set. For the string to contain all possible binary codes of `k` length there needs to be exactly `k^2` substrings in our set by the end of iterating over the `s` using the sliding window

```
k = 2

uniqueSubstrings = 0

"00110"
 ^^     // unique substring found

uniqueSubstrings = 1

"00110"
  ^^    // unique substring found

uniqueSubstrings = 2

"00110"
   ^^   // unique substring found

uniqueSubstrings = 3

"00110"
    ^^   // unique substring found

uniqueSubstrings = 3 = k^2 // all binary codes found
```

Time: `O(N * K)` Where `N` is the length of `s` and `K` is `k`. `String.substring` is an `O(K)` operation here and is done `N` times

Space: `O(N * K)` There will be at most `N` strings of `K` length in the set

- [JavaScript](./check-if-a-string-contains-all-binary-codes-of-size-k.js)
- [TypeScript](./check-if-a-string-contains-all-binary-codes-of-size-k.ts)
- [Java](./check-if-a-string-contains-all-binary-codes-of-size-k.java)
- [Go](./check-if-a-string-contains-all-binary-codes-of-size-k.go)

</details>
