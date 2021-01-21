# Find the Most Competitive Subsequence

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an integer array nums and a positive integer k, return the most competitive subsequence of nums of size k.

An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements from the array.

We define that a subsequence a is more competitive than a subsequence b (of the same length) if in the first position where a and b differ, subsequence a has a number less than the corresponding number in b. For example, [1,3,4] is more competitive than [1,3,5] because the first position they differ is at the final number, and 4 is less than 5.

### Example 1:

```
Input: nums = [3,5,2,6], k = 2
Output: [2,6]
Explanation: Among the set of every possible subsequence: {[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]}, [2,6] is the most competitive.
```

### Example 2:

```
Input: nums = [2,4,3,3,5,4,9,6], k = 4
Output: [2,3,3,4]
```

### Constraints

`1 <= nums.length <= 105`

`0 <= nums[i] <= 109`

`1 <= k <= nums.length`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

"Competitive" here can be interpreted as the as sequence of numbers that when combined into one number, is the smallest among the other candidates.

```
[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]
[35,32,36,52,56,26] // 26 is the smallest number in the array

[2,6] // is the most competitive
```

Intuition may lead us to think that sorting the array and return the `k` elements from the beginning may be the best approach, but here order matters and we cannot sort the array because we will lose the original order of all our sequences.

Other approach may be to generate all possible sequences of length `k` and take the return the array that is the smallest "lexicographically". But this can takes us up to O(n^2) operations just to generate all the possible valid combinations.

Instead of trying to compare sequences of the array, we can try and build the most competitive sequence ourselves. To do this we need to know how to build the most competitive sequence.

In every case, the most competitive sequence always begins with the smallest number in the array that is at the least `k`th position from the end.

```
k = 4
[3,5,2,6,4,1] // This is the smallest number in the array that is at least k from the end
     ^


[3,5,2,6,4,1] // We cannot use the smallest number in the array here because we cannot build a sequence of length k from this position in the array
           ^
```

From then on out, we'll need the find the next smallest that is between the position of our first number `i` till `k - 1` from the end.

```
k = 4
[3,5,2,6,4,1] // 6 is the smallest number in the array that is at least k - 1 from the end
     ^ ^

[3,5,2,6,4,1] // we cannot use 4 here since it is not at least k - 1 from the end
     ^   ^
```

We'll repeat the operations until we build the smallest sequence.

Now we'll have to know how to construct the sequence. Our goal here is to "push" the smallest number of the front of our sequence and have the next subsequent smallest numbers next to it

```
k = 4
[3,5,2,6,4,1]
 ^
[3]

[3,5,2,6,4,1] // push 5
   ^
[3 5]

[3,5,2,6,4,1] // push 2 to the front, we can discard the rest of the numbers too
     ^
[2]

[3,5,2,6,4,1] // push 6
       ^
[2 6]

[3,5,2,6,4,1] // we can push 4 in front of 6, but since 4 is not at least k - 2 we cannot create a sequence of k length with 4 as the second number well just push this to the end
         ^
[2 6 4]

[3,5,2,6,4,1] // push one to the end
           ^
[2 6 4 1]
```

These operations can best be done with a stack, where for every number we iterate over in the array we'll compare it with the top of our stack, if it is smaller, we can pop the top number from the stack. If the next number in the stack is bigger than the current number in the array we can also pop that number from the stack and so on.

Time: O(n)
Space: O(k)

- [JavaScript](./find-the-most-competitive-subsequence.js)
- [TypeScript](./find-the-most-competitive-subsequence.ts)
- [Java](./find-the-most-competitive-subsequence.java)
- [Go](./find-the-most-competitive-subsequence.go)
</details>
