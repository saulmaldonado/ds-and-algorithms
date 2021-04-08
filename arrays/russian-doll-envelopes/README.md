# Russian Doll Envelopes

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem

You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.

### Example 1

```
Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
```

### Example 2

```
Input: envelopes = [[1,1],[1,1],[1,1]]
Output: 1
```

### Constraints

`1 <= envelopes.length <= 5000`

`envelopes[i].length == 2`

`1 <= wi, hi <= 104`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

Our greedy solution for this problem would be to sort the envelopes based on their width and height. That way our problem would be reduced to finding the longest increasing subsequence or in other words find the longest subsequence of the sorted envelopes where both the height and width increase.

```
[[5,4],[6,4],[6,7],[2,3]]

sort...

[[2,3],[5,4],[6,4],[6,7]]
```

In fact if the envelopes are sorted by width, then we only need to find the longest increasing subsequence of heights.

In the case for envelopes that have the same widths by different heights, we would want to insert the envelopes with the largest height first. If there are other envelopes that have a smaller height and can fit into the subsequence then we can replace it afterwards.

```
[[2,3],[5,4],[6,7],[6,4]]

[[2, 3], [5, 4], [6, 7]]
```

##### Implementation

We want to sort the envelopes by ascending widths and descending heights. That way we can find the longest increasing subsequence based on heights.

We will use an array where we can insert out envelopes. We will use binary search to find the position in the array we can insert the envelope into. If the envelope gets inserted at the end of the array we can increase the count.

```
[]

[[2,3],[5,4],[6,7],[6,4]]
   ^
[3]

[[2,3],[5,4],[6,7],[6,4]]
          ^
[3, 4]

[[2,3],[5,4],[6,7],[6,4]]
                ^
[3, 4, 7]

[[2,3],[5,4],[6,7],[6,4]]
                      ^
[3, 4, 7]

```

Time: `O(N * log * N)`

Space: `O(N)`

- [JavaScript](./russian-doll-envelopes.js)
- [TypeScript](./russian-doll-envelopes.ts)
- [Java](./russian-doll-envelopes.java)
- [Go](./russian-doll-envelopes.go)

</details>
