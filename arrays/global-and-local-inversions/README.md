# Global and Local Inversions

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.

The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].

The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].

Return true if and only if the number of global inversions is equal to the number of local inversions.

### Example 1

```
Input: A = [1,0,2]
Output: true
Explanation: There is 1 global inversion, and 1 local inversion.
```

### Example 2

```
Input: A = [1,2,0]
Output: false
Explanation: There are 2 global inversions, and 1 local inversion.
```

### Constraints

`A will be a permutation of [0, 1, ..., A.length - 1].`

`A will have length in range [1, 5000].`

`The time limit for this problem has been reduced.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

According to the problem's definition of global and local inversions, an inversion happens when `A[i] > A[j]` or where `j` has to be `i < j`. For local inversions, `j` must be `i + 1`. For global inversions, `j` has to be `i < j` or `j` can be `i < j < N`.

This means that all local inversions are global inversions but not all global inversions are local inversions. If we want to make sure that all of our inversions are both global and local, we need to make sure that `i` and `j` are at most `1` position apart.

In a sorted array, there are no inversions. Switching the positions of two neighboring elements would cause one local and global inversion.

```
[0 1 2]

[1 0 2] // 1 and 0 are switched

[0 2 1] // 2 and 1 are switched
```

If we were to switch the positions of moved element with another element this would cause a global inversion but not a local inversion

```
[0 1 2]

[1 0 2] // A[0] and A[1] is a local and global inversion

[1 2 0] // A[1] and A[2] is a local and global inversion. A[0] and A[2] is a global inversion but not a local inversion
```

In order to make sure that all inversions in an array are local and global we need to make sure that the difference between `A[i]` and `i` cannot be more than `1`. If the different between `A[i]` and `i` is more than `1` then we know that the array is out of order and there is at least one more global inversion than local inversion.

##### Implementation

Since `A` is `[0, 1, ..., N - 1]`, where `N` is the length of `A`, we can determine if there are more global inverions than local inversions if the difference between `A[i]` and `i` is more than one. If the difference between `A[i]` and `i` is less than `-1` there are more global inversions than local inversions. If `A[i]` and `i` are the same, `A[i]` is not part of an inversion.

Time: `O(N)` Where `N` is the length of `A`

Space: `O(1)`

- [JavaScript](./global-and-local-inversions.js)
- [TypeScript](./global-and-local-inversions.ts)
- [Java](./global-and-local-inversions.java)
- [Go](./global-and-local-inversions.go)

</details>
