# Vowel Spellchecker

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.

For a given query word, the spell checker handles two categories of spelling mistakes:

- Capitalization: If the query matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the case in the wordlist.
  - Example: wordlist = ["yellow"], query = "YellOw": correct = "yellow"
  - Example: wordlist = ["Yellow"], query = "yellow": correct = "Yellow"
  - Example: wordlist = ["yellow"], query = "yellow": correct = "yellow"
- Vowel Errors: If after replacing the vowels ('a', 'e', 'i', 'o', 'u') of the query word with any vowel individually, it matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the match in the wordlist.
  - Example: wordlist = ["YellOw"], query = "yollow": correct = "YellOw"
  - Example: wordlist = ["YellOw"], query = "yeellow": correct = "" (no match)
  - Example: wordlist = ["YellOw"], query = "yllw": correct = "" (no match)

In addition, the spell checker operates under the following precedence rules:

- When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back.
- When the query matches a word up to capitlization, you should return the first such match in the wordlist.
- When the query matches a word up to vowel errors, you should return the first such match in the wordlist.
- If the query has no matches in the wordlist, you should return the empty string.

Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i].

### Example 1

```
Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
```

### Constraints

`1 <= wordlist.length <= 5000`

`1 <= queries.length <= 5000`

`1 <= wordlist[i].length <= 7`

`1 <= queries[i].length <= 7`

`All strings in wordlist and queries consist only of english letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### 3 Maps

##### Intuition

For every `word` in `wordlist` there are three three possbile ways we can match with a `query`.

1. The `word` matches the `query` exactly
2. The `word` matches the `query` case-insensitive matching
3. The `word` match the `query` by matching a vowel with any vowel and using case insensitive matching

This mean every string can be in 3 different states, one where the string is unchanged, one where the string is entirely one casing, and one where the string is entirly one casing and all of the vowel are replaces with wildcards `"*"`. If we can generate all 3 states of the word and map the word to its original state then we can try to match every `query` with one of the 3 states for every word. The first one we can match with will be the found `word`.

##### Implementation

We'll use 3 Maps to a state of a `word` with its original. The first one will be its original untouched state. Since this maps a `word` with itself we can use a Set instead for this

```
set = new Set(words);
```

The second one will be the case insensitve state. To do this we'll turn the entire `word` to its lower case version and map it with the original word

```
map[word.toLowerCase()] = word
```

The third one well the case insensitive with wildcard vowels state. To do this we'll turn the entire `word` to its lower case version and replace all of the vowels with `"*"` which can be done using a regex replacement or a helper method. This will be mapped to its original `word`

```
map[word.toLowerCase().replaceAll("[aeiou]", "*")] = word
```

Now to match every `query` with a state of the word, we'll need to turn every `query` into one of the three states as well. For example if we want to compare a `query` with a case-insensitive `word` we'll need to convert `query` to its case-insensitive version before comparing. To do this efficiently we can have separate helper methods that will convert a string into one of the three states.

```
word = "AbC"

"AbC" = exact(word)
"abc" = caseInsensitive(word)
"*bc" = errorVowels(word)
```

If we match a `query` with one of the states of the `word` we will take the original word and return that as the match

Time: `O(N * M)` Where `N` is the total number of strings in `wordlist` and `queries` and `M` is the average length of the word

Space: `O(3 * W)` Where `W` is the length of `wordlist`

- [JavaScript](./vowel-spellchecker.js)
- [TypeScript](./vowel-spellchecker.ts)
- [Java](./vowel-spellchecker.java)
- [Go](./vowel-spellchecker.go)

</details>
