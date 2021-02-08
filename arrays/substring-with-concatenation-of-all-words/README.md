# Substring with Concatenation of All Words

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

You can return the answer in any order.

### Example 1:

```
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
```

### Example 2:

```
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
```

### Example 3:

```
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
```

### Constraints

`1 <= s.length <= 104`

`s consists of lower-case English letters.`

`1 <= words.length <= 5000`

`1 <= words[i].length <= 30`

`words[i] consists of lower-case English letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Double sliding Window

Since all of the strings in `words` are all of the same length, we can use a sliding window of a fixed size to search for occurrences of a `word` in `s`. If we were to advance the sliding window by `len`, where `len` is the length of every `word` in `words`, we would come across a new `len` letter word that could be a part of `words`

```
words = ["foo","bar"]
windowLength = 3

"barfoofoobar" // bar is found
 ^ ^

"barfoofoobar" // foo is found
    ^ ^
```

Since `words` can have duplicate string, we'll need a HashMap to track the frequencies of each string in `words`. We'll want to iterate over the `s` for a starting point for as long as we can build string of `len * words.length`. When searching, we'll check for two things. First is if the current substring in our window is contained in `words`, if not skip the current iteration and pick a new starting point. Second, if the substring contained in our window is included in `words`, we'll record the string and update it's frequency in a local frequency map that counts for the current iteration. This map will keep track of the frequency of each string we are able to find, if the frequency of one word is greater than the frequency in our other map, the current substring is invalid and we can stop searching.

```
words = ["foo","bar"]
map = {"foo":1, "bar": 1}
windowLength = 3

freq = {"foo": 2}

"foofoofoobar" // foo is found
 ^ ^

"foofoofoobar" // freq of foo is greater than in map
    ^ ^
```

If the total count of words in our frequency map is equal to the length of `words` then we've come across a valid substring. We will insert the starting point of the substring in our `ans` list.

```
words = ["foo","bar"]
map = {"foo":1, "bar": 1}
windowLength = 3

freq = {"bar" : 1, "foo": 1}

"barfoofoobar" // bar is found
 ^ ^

"barfoofoobar" // foo is found
    ^ ^

// count of words found is equal to words.length, insert the starting position in our ans array

[0]


...

"barfoofoobar" // bar is found
       ^ ^

"barfoofoobar" // foo is found
          ^ ^

// count of words found is equal to words.length, insert the starting position in our ans array

[0, 6]
```

Optimizations:

If we only advance our window by `len` we can try every starting point with only `len` iterations. For example:

```
"barfoofoobarthefoobarman"
 ^ ^

"barfoofoobarthefoobarman"
    ^ ^

"barfoofoobarthefoobarman"
       ^ ^

...

"barfoofoobarthefoobarman"
  ^ ^

"barfoofoobarthefoobarman"
     ^ ^

"barfoofoobarthefoobarman"
        ^ ^
...

"barfoofoobarthefoobarman"
   ^ ^

"barfoofoobarthefoobarman"
      ^ ^

"barfoofoobarthefoobarman"
         ^ ^
```

We'll have to modify our search for this. If we come across a window substring that is not in words we can just advance our window by `len` instead of breaking the search. If the frequency of the window substring is greater than in `words`, we can take the left most substring, remove it from the freq map and advance our start pointer until we clear the duplicate substring from our freq map

```
["bar","foo","the"]

map = {"bar" : 1, "foo": 1,  "the": 1}

"barfoofoobarthefoobarman"
 ^ ^
 ^
"barfoofoobarthefoobarman"
    ^ ^
 ^
"barfoofoobarthefoobarman"
       ^ ^
 ^

map = {"bar" : 1, "foo": 2} // remove the left most substrings until `foo` goes back to 1

"barfoofoobarthefoobarman"
       ^ ^
       ^

map = {"foo": 1}

```

Using this strategy we are able build all possible valid substring using doing only `len` loops.

Time: `O(W * N)` where `W` is the length of the strings in the `words` and `N` is the length of `s`

Space: `O(N)` where `N` is the length of `s`, worst case

- [JavaScript](./substring-with-concatenation-of-all-words.js)
- [TypeScript](./substring-with-concatenation-of-all-words.ts)
- [Java](./substring-with-concatenation-of-all-words.java)
- [Go](./substring-with-concatenation-of-all-words.go)
</details>
