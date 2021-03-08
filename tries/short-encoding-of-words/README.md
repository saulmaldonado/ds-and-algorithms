# Short Encoding of Words

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

A valid encoding of an array of words is any reference string s and array of indices indices such that:

words.length == indices.length
The reference string s ends with the '#' character.
For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

### Example 1

```
Input: words = ["time", "me", "bell"]
Output: 10
Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
```

### Example 2

```
Input: words = ["t"]
Output: 2
Explanation: A valid encoding would be s = "t#" and indices = [0].
```

### Constraints

`1 <= words.length <= 2000`

`1 <= words[i].length <= 7`

`words[i] consists of only lowercase letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Remove Existing Words and Suffixes From Array

According to the rules of a valid encoding the longest possible encoding we can make is `∑ word.length + 1` where `word` is `words[i]`. These means that the longest string we can make is simply all of the words of `words` combined together with a `#` delimiter

```
words = ["time", "me", "bell"]

"time#me#bell"
```

We can reduce the length of our encoding by removing words that are already included in the encoding which could either

1. Duplicate words

2. Smaller words that are a suffixes of bigger words

For example

```
words = ["time", "time", "me", "bell"]

"time#time#me#bell" -> "time#me#bell"

"me" is a suffix of "time"

"time#me#bell" -> "time#bell"
```

We can remove a duplicate words from the array by converting it into a `Set`. To removes suffix words, we'll need to remove words from `words` that are also suffixes to other words. To do this we'll need to figure out all of the suffixes of the words in `words`.

Every words has a total of `word.length - 1` total suffixes.

For example

```
"time"

suffixes: ["ime" "me" "e"] // if any of these are words in words words, remove them from the set
```

This way we'll be left with a set that has words that are not duplicates and that are not suffixes to bigger words. To get the length we'll simply need to calculate the sum of every word length plus 1 for the `#` delimiter

```
words = ["time", "me", "bell"]

"time#bell"

length = 9
```

Time: `O(∑ word[i] ^ 2)` For every word we need to generate `word.length - 1` different substrings strings.

Space: `O(∑ word[i])` Upper bound for strings stored in the set

#### Trie

Similar to how a Trie can be used to find prefixes are larger words we can use it to find suffixes of larger words by inserting the character into the Trie in reverse order

```
"time" -> "emit"

e -> m -> i -> t -> END
```

This way we can check if a word is a suffix of a larger word by checking if the word is part of a greater word path.

```
"me" -> "em"


e -> m -> i -> t -> END
^    ^                  // here "em" is part of the "emit" word path since "m" is not an ending node
```

For this to work, we'll want to only include words whose last character is an ending or leaf node in the Trie. Every other word whose last character is not a leaf is considered a suffix of a longer word.

Leaf nodes here are nodes without a single child. To implement a TrieNode we will have a class that has a hashmap of child nodes and a depth property that will represent the depth the node in the tree. We can use this to calculate the length of the substring up until the node. To calculate the length of a word we want to include in the encoding, we'll take the depth of an ending node and add one for the delimiter `#`

To build the Trie we will insert the words into our tree to build a tree. We'll also store references of the last TrieNodes for the word inserted in a hashmap to use later.

Once all the words have been inserted we will check the stored ending nodes for leaf node or nodes that do not children. These are endings to word that will be included in our encoding. We'll take the sum of the depths of all the leaf nodes as the length of the small shortest encoding

Time: `O(∑ word[i])`

Space: `O(∑ word[i])`

- [JavaScript](./short-encoding-of-words.js)
- [TypeScript](./short-encoding-of-words.ts)
- [Java](./short-encoding-of-words.java)
- [Go](./short-encoding-of-words.go)

</details>
```
