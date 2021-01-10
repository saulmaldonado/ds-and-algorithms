# Create Sorted Array through Instructions

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given an integer array instructions, you are asked to create a sorted array from the elements in instructions. You start with an empty container nums. For each element from left to right in instructions, insert it into nums. The cost of each insertion is the minimum of the following:

- The number of elements currently in nums that are strictly less than instructions[i].
- The number of elements currently in nums that are strictly greater than instructions[i].

For example, if inserting element 3 into nums = [1,2,3,5], the cost of insertion is min(2, 1) (elements 1 and 2 are less than 3, element 5 is greater than 3) and nums will become [1,2,3,3,5].

Return the total cost to insert all elements from instructions into nums. Since the answer may be large, return it modulo 109 + 7

<!-- any examples -->

### Example 1:

```
Input: instructions = [1,5,6,2]
Output: 1
Explanation: Begin with nums = [].
Insert 1 with cost min(0, 0) = 0, now nums = [1].
Insert 5 with cost min(1, 0) = 0, now nums = [1,5].
Insert 6 with cost min(2, 0) = 0, now nums = [1,5,6].
Insert 2 with cost min(1, 2) = 1, now nums = [1,2,5,6].
The total cost is 0 + 0 + 0 + 1 = 1.
```

### Example 2:

```
Input: instructions = [1,2,3,6,5,4]
Output: 3
Explanation: Begin with nums = [].
Insert 1 with cost min(0, 0) = 0, now nums = [1].
Insert 2 with cost min(1, 0) = 0, now nums = [1,2].
Insert 3 with cost min(2, 0) = 0, now nums = [1,2,3].
Insert 6 with cost min(3, 0) = 0, now nums = [1,2,3,6].
Insert 5 with cost min(3, 1) = 1, now nums = [1,2,3,5,6].
Insert 4 with cost min(3, 2) = 2, now nums = [1,2,3,4,5,6].
The total cost is 0 + 0 + 0 + 0 + 1 + 2 = 3.
```

### Example 2:

```
Input: instructions = [1,3,3,3,2,4,2,1,2]
Output: 4
Explanation: Begin with nums = [].
Insert 1 with cost min(0, 0) = 0, now nums = [1].
Insert 3 with cost min(1, 0) = 0, now nums = [1,3].
Insert 3 with cost min(1, 0) = 0, now nums = [1,3,3].
Insert 3 with cost min(1, 0) = 0, now nums = [1,3,3,3].
Insert 2 with cost min(1, 3) = 1, now nums = [1,2,3,3,3].
Insert 4 with cost min(5, 0) = 0, now nums = [1,2,3,3,3,4].
​​​​​​​Insert 2 with cost min(1, 4) = 1, now nums = [1,2,2,3,3,3,4].
​​​​​​​Insert 1 with cost min(0, 6) = 0, now nums = [1,1,2,2,3,3,3,4].
​​​​​​​Insert 2 with cost min(2, 4) = 2, now nums = [1,1,2,2,2,3,3,3,4].
The total cost is 0 + 0 + 0 + 0 + 1 + 0 + 1 + 0 + 2 = 4.
```

### Constraints

`1 <= instructions.length <= 105`

`1 <= instructions[i] <= 105`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

This problem can be solved using a simple array where the array keeps track of the count of all numbers as they are inserted into the array. For every number in the `instructions` array we can put together all of counts of all numbers before the instruction. This involves iterating over the `count` array from `0` to `A[i] - 1`

```
instructions = [1,5,6,2]
count = [0, 0, 0, 0, 0, 0, 0, 0, ...up til the max number]

[1,5,6,2]
 ^
count = [0, 0, 0, 0, 0, 0, 0, 0]
         ^ iterate up until c[A[i] - 1] and add count to lessThan
lessThan = 0
greaterThan = i - lessThan + c[A[i]] // all other numbers

res = min(lessThan, greaterThan)

count = [0, 1, 0, 0, 0]
```

Since we have to iterate the count array and recalculate the count of numbers less than the current instruction, this can result in a time complexity of O(n^2). We can dramatically reduce the number of operations needed by having a data structure that instead stores the stores the current number count as well as all the numbers before (a prefix sum). We can use a Binary Index Tree (Fenwick tree) to store these prefix sums giving us a O(log n) time for getting values and a O(log n) for update values.

```
// update the tree with new value
  public void update(int x, int[] c) {
    while (x < 100001) { // update until the max length of count array
      c[x]++;
      x += x & -x;
    }
  }

// calculate prefix sum
  public int get(int x, int[] c) {
    int res = 0;
    while (x > 0) {
      res += c[x];
      x -= x & -x;
    }
    return res;
  }

```

<!-- relative links to solution files. {title} should be replaced with the name of the problem in `kebab-case` -->

- [JavaScript](./create-sorted-array-through-instructions.js)
- [TypeScript](./create-sorted-array-through-instructions.ts)
- [Java](./create-sorted-array-through-instructions.java)
- [Go](./create-sorted-array-through-instructions.go)
</details>
