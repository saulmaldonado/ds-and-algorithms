# Validate Stack Sequences

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

### Example 1

```
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

### Example 2

```
Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
```

### Constraints

`0 <= pushed.length == popped.length <= 1000`

`0 <= pushed[i], popped[i] < 1000`

`pushed is a permutation of popped.`

`pushed and popped have distinct values.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Stack

We can validate the sequences by simulating them using a real stack pushing elements into the stack and popping them out whenever possible. If by the end of pushing all possible elements we are left with `0` elements to pop out, then the sequences are valid.

We'll keep track of the next element we can pop by keeping a pointer on `popped`, `i`. The first element in `popped` is the first element we can pop out. We'll keep adding elements to the stack until `popped[i]` is at the top at the stack. At this point we can pop the element from the stack and advance our pointer to the next elements we can pop. If the next element is at the top we'll pop it as well, if not, we'll keep on adding elements from `pushed` into the stack until the top of the stack becomes `popped[i]`. If by the end of adding elements we're not able to pop `popped[i]` from the top of the stack then it means that either `popped[i]` is not in `pushed` or `popped[i]` was pushed into the stack before another element preventing us from popping elements from the stack according to `popped`.

```
pushed = [1,2,3,4,5]
          ^
popped = [4,5,3,2,1]
          ^

[1] // 4 is not in the top of the stack, push another element

pushed = [1,2,3,4,5]
            ^
popped = [4,5,3,2,1]
          ^

[1 2] // 2 is not in the top of the stack, push another element

pushed = [1,2,3,4,5]
              ^
popped = [4,5,3,2,1]
          ^

[1 2 3] // 3 is not in the top of the stack, push another element

pushed = [1,2,3,4,5]
                ^
popped = [4,5,3,2,1]
          ^

[1 2 3 4] // 4 is at the top of the stack, pop it and increment the popped pointer

popped = [4,5,3,2,1]
            ^

[1 2 3 4] // 5 is not at the top of the stack, continue pushing elements

pushed = [1,2,3,4,5]
                  ^
popped = [4,5,3,2,1]
            ^
[1 2 3 5] // 5 is at the top of the stack, pop it and increment the popped pointer

popped = [4,5,3,2,1]
              ^
[1 2 3] // 3 is at the top of the stack, pop it and increment the popped pointer

popped = [4,5,3,2,1]
                ^
[1 2] // 2 is at the top of the stack, pop it and increment the popped pointer

popped = [4,5,3,2,1]
                ^
[1 2] // 2 is at the top of the stack, pop it and increment the popped pointer

popped = [4,5,3,2,1]
                  ^
[1] // 3 is at the top of the stack, pop it

// there are no more elements to add or pop, the sequence is valid
```

Time: `O(N)` Where `N` is the length of `pushed`

Space: `O(N)`

- [JavaScript](./validate-stack-sequences.js)
- [TypeScript](./validate-stack-sequences.ts)
- [Java](./validate-stack-sequences.java)
- [Go](./validate-stack-sequences.go)

</details>
