# Reconstruct Original Digits from English

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order.

### Example 1

```
Input: s = "owoztneoer"
Output: "012"
```

### Example 2

```
Input: s = "fviefuro"
Output: "45"
```

### Constraints

`1 <= s.length <= 105`

`s[i] is one of the characters ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"].`

`s is guaranteed to be valid.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

There are four numbers that have unique characters

- `zero` has `z` that is not included in any other number

- `two` has `w` that is not included in any other number

- `four` has `u` that is not included in any other number

- `six` has `x` that is not included in any other number

- `eight` has `g` that is not included in any other number

This mean everytime we come across one of these characters, we can assume that all of the other characters of the number are also included in the string.

For other numbers that have shared characters with other number its a matter of elimination:

- `s` is included in `six` and `seven`, we can find the number of sevens by subtracting the number of `s` found by the number of `x` found

- `h` is included in `eight` and `three`, we can find the number of threes by subtracing the number of `h` found by the number of `g` found

- `f` is included in `five` and `four`, we can find the number of fives by subtracting the number of `u` found by the number of `f` found

- `i` is included in `nine`, `eight`, `five` and `six`, we can find the number of nines by subtracting the number of `i` found by the number of `x`, `g`, `f`

- `o` in included in `one`, `two`, `four`, `zero`, we can find the number of ones by subtracting the number of `o` found by the number of `w`, `h`, `z`

##### Implementation

We can have a frequency map that counts the frequency of numbers. Characters `z`, `w`, `u`, `x`, and `g` correspond to a unique character so we can increment that character. For characters `s`, `h`, `f`, `i`, `o` they correspond to numbers `1`, `3`, `5`, `7`, `9` which we can find its real occurance after find the occurance of the unique numbers.

After getting the real frequency map, we can convert it into a string.

Time: `O(N)` Where `N` is the length of `s`

Space: `O(N)`

- [JavaScript](./reconstruct-original-digits-from-english.js)
- [TypeScript](./reconstruct-original-digits-from-english.ts)
- [Java](./reconstruct-original-digits-from-english.java)
- [Go](./reconstruct-original-digits-from-english.go)

</details>
