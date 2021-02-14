# Group Anagrams

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example 1

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

### Example 2

```
Input: strs = [""]
Output: [[""]]
```

### Constraints

`1 <= strs.length <= 104`

`0 <= strs[i].length <= 100`

`strs[i] consists of lower-case English letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Canonical Form

Canonical Form is the _simplest representation of an object that which allows it to be identified in a unique way_. Since anagrams are just rearrangements of the same letters we can lexicographically sort string to get their canonical form. Strings that have the same canonical form are anagrams and can be grouped together.

```
strs =            "ate","eat","tea"

canonical form  = "aet","aet","aet"

[["ate","eat","tea"]]
```

To group the strings, we will have a map that is keyed by the strings' canonical form valued by string lists. For every string in `strs` we will calculate its canonical form and check if the map already has an existing key. If the key exists, then there is already an existing similar anagram. We will push the current string into the list in the map

After iterating over `strs`, we will iterate over the values of the map and push all the grouped anagrams into a List of Lists.

Time: `O(N * K * log K)` Where `N` is the length of `strs` and `K` is the average length of the strings

Space: `O(N*K)`

#### Custom Key

Using the same idea of grouping strings in a map as before, we can group the strings by a different key other than its canonical form.

If an anagram is just rearrangements of the same characters that _appear at the same frequency_, then we can group these strings by character frequency. If we want to use this in a map, we need a key that represents character frequency. One way to do this is to have an array of length `26` that represents the frequency of every character in the alphabet. Once calculated, we can turn this array into a string that is delimited by a `'#'` character. For example:

```
strs ="ate","eat","tea"

character frequency representation  = "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0"

{
  1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0: ["ate", "eat", "tea"]
}
```

After iterating over `strs`, we will iterate over the values of the map and push all the grouped anagrams into a List of Lists.

TIme: `O(N * K)` Where `N` is the length of `strs` and `K` is the average length of the strings

Space: `O(N * K)`

- [JavaScript](./group-anagrams.js)
- [TypeScript](./group-anagrams.ts)
- [Java](./group-anagrams.java)
- [Go](./group-anagrams.go)

</details>
