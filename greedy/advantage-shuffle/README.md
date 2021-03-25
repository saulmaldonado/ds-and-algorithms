# Advantage Shuffle

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

### Example 1

```
Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]
```

### Example 2

```
Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]
```

### Constraints

`1 <= A.length = B.length <= 10000`

`0 <= A[i] <= 10^9`

`0 <= B[i] <= 10^9`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Greedy

##### Intuition

If we want to maximize the `A`'s advantage then the greedy approach would be to overtake the largest numbers of `B`. These larger element of `B` are more difficult to over take since it require an element `A` where `B[i] > A[i]`. The larger elements of both `A` and `B` have a higher prioirty.

If the largest element of `A` can't over take the largest element of `B` then no other element of `A` can take over the largest element of `B`. We can instead use one of the lower prioirty elements of `A` to use in place.

##### Implementation

We'll want to sort the elements of `A` and `B` where we can access the highest priorty elements of `B` and the highest and lowest priorty elements of `B`. We can use a priorty queue of indices for the sorting the elements of `B`. This way we can poll the highest priority element from the top until there are no elements left. To sort the elements of `A` we can simply sort the array and have two pointers at each end of the array. For taking the highest priority element from `A` we take the element at the high pointer and decrement the pointer. For taking the lowest priorty element we will take the element at the low pointer and increment the pointer. We don't have to worry about pointers crossing over since `A.length == B.length`

For element we poll from `B` we'll want to see if the highest priority element of `A` can overtake it. If it can then we'll place `A[i]` at `res[j]` where `j` is the index we polled from `res`. If it can't then we'll use onr of our lowest priority elements from `A` as a placeholder.

Time: `O(N log N)` Where `N` is the length of `A` and `B`

Space: `O(N)`

- [JavaScript](./advantage-shuffle.js)
- [TypeScript](./advantage-shuffle.ts)
- [Java](./advantage-shuffle.java)
- [Go](./advantage-shuffle.go)

</details>
