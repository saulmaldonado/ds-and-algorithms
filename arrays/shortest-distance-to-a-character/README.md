# Shortest Distance to a Character

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the shortest distance from s[i] to the character c in s.

### Example 1:

```
Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
```

### Example 2:

```
Input: s = "aaab", c = "b"
Output: [3,2,1,0]
```

### Constraints

`1 <= s.length <= 104`

`s[i] and c are lowercase English letters.`

`c occurs at least once in s.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Backwards and Forwards traversal

When traversing, we can calculate the distance between `c` and `s[i]` only if know that last position of `c` in the array. This mean we can only calculate the distance for character that are to the right of `c` in the string. If we wanted to also calculate the distance between `s[i]` and `c` nearest that c occurs after `s[i]`, we would need to traverse the array backwards. For example:

```


// left to right
// where we calculate the distance between s[i] and the nearest c to the left
//"...etcode"
//    ->

"loveleetcode"
[-,-,-,0,1,0,0,1,2,2,1,0]

// right to left
// where we calculate the distance between s[i] and the nearest c to the right
//"...etcode"
//       <-

"loveleetcode"
right to left = [3,2,1,0,1,0,0,4,3,2,1,0]
```

If we are able to calculate the distances when traversing in both directions we can create a new array that contains the min of the both array at every index.

We can also do this without creating more than one array. Once we are done with first forwards traversal of the string and we know that index of the last `c`, then we can start our backwards traversal at that index (We can do this since we know that any character to the right of the last position can't possibly have a different distance). We can then calculate the new distances going backwards, replacing the existing distance if our new distance is smaller.

Time: `O(2N)` Where `N` is the length of the array

Space: `O(N)`

- [JavaScript](./shortest-distance-to-a-character.js)
- [TypeScript](./shortest-distance-to-a-character.ts)
- [Java](./shortest-distance-to-a-character.java)
- [Go](./shortest-distance-to-a-character.go)
</details>
