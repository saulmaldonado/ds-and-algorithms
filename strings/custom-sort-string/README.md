# Custom Sort String

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

### Example 1

```
Input:
S = "cba"
T = "abcd"
Output: "cbad"
Explanation:
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
```

### Constraints

`S has length at most 26, and no character is repeated in S.`

`T has length at most 200.`

`S and T consist of lowercase letters only.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Custom Lexicographic Sort

Sorting an array of characters that reprenset a string would result in lexicographic sorting the characters based on the numeric encoding (ASCII). If we can override this lexicographic order to with that given by `S` then we can sort `T` using a custom sort. For ordering reference we can create a table that will store the numeric priority of each character. Characters with a lower numeric priority will be sorted before characters with a greater number numeric priority.
To build it we will iterate over `S` and store the characters in the table with their index being their priority.

```
"cba"

{
  c: 0
  b: 1
  a: 2
}
```

Now once we want to sort the string, we would refer to our table for character ordering. This would involve make a custom sort function that will sort character based on their priority in the table we made. Characters not in the table would get a priority of `26` that they should be placed at the end of the string

```
T = "abcd"

{
  c: 0
  b: 1
  a: 2
}

"abcd" -> "cbad"
```

Time: `O(N log N)` Where `N` is the length of `T`

Space: `O(S)` With an upper bound of `O(26)`

#### Reconstruct The String

If we can break up the string into `26` character groups and reconstruct it by inserting characters into the string based on which characters come first in `S`. To do this we can create a frequency map that records characters in `T`. Then, iterating over `S`, insert the characters into a new string in the order we find them in `S`.

```
T = "abcd"

{
  a: 1
  b: 1
  c: 1
  d: 1
}


S = "cba" // insert all "c" characters
     ^
"c"

S = "cba" // insert all "b" characters
      ^
"cb"

S = "cba" // insert all "a" characters
       ^
"cba"

{
  a: 0
  b: 0
  c: 0
  d: 1
}

"cbad" // insert remaining characters at the end
```

Time: `O(S + T)` Where `S` and `T` and the lengths of `S` and `T`

Space: `O(S)` With an upper bound of `O(26)`

- [JavaScript](./custom-sort-string.js)
- [TypeScript](./custom-sort-string.ts)
- [Java](./custom-sort-string.java)
- [Go](./custom-sort-string.go)

</details>
