# Palindrome Linked List

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given the head of a singly linked list, return true if it is a palindrome.

### Example 1

```
Input: head = [1,2,2,1]
Output: true
```

### Example 2

```
Input: head = [1,2]
Output: false
```

### Constraints

`The number of nodes in the list is in the range [1, 105].`

`0 <= Node.val <= 9`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

There are several ways to check for a palidrome lists. The simplest would be to reverse the list and check if the original and reverse lists match. Another way to do without extra `O(N)` memory would be to start two pointers from the middle of the list and move them outwards and checking if the nodes at both pointers are the same.

```
[1,2,3,3,2,1]
     ^ ^

[1,2,3,3,2,1]
   ^     ^

[1,2,3,3,2,1]
 ^         ^
```

This is the same as splitting the string in half, reversing one of the halves and comparing them

```
[1,2,3 | 3,2,1]

[1,2,3 | 1,2,3] // reverse the second half

[1,2,3 | 1,2,3]
 ^       ^

[1,2,3 | 1,2,3]
   ^       ^

[1,2,3 | 1,2,3]
     ^       ^
// both halves are the same
```

Splitting the string in halve and reversing would prevent us from having to traverse the list backwards which cannot be done in a singly linked list

##### Implementation

We first need to halve the list. We can do this using a fast and slow pointer. The fast pointer would travel the at twice the rate of the slow pointer putting the slow pointer at the middle of the list once the fast pointer reaches the end.

For an even length linked list the fast pointer will land on `null` and the slow pointer will land on the first node of the second halve of the linked list

```
[1 2 2 1] null
     ^     ^
   slow   fast
```

For an odd length linked list the slow pointer will land on the last node and the slow pointer will land on the middle node. Since we middle node is considered to be a part of both halves we can exclude this node. In this case we can advance the slow pointer so it lands on the first node of the second halve.

```
[1 2 3 2 1]
     ^   ^
    slow fast

[1 2 3 2 1] null
       ^     ^
      slow  fast
```

We can then reverse the second halve and compare both halves by placing a pointer at head and a pointer at the reversed start of the second halve.

```
[1 2] [1 2]
 ^     ^
[1 2] [1 2]
   ^     ^
```

Time: `O(N)` Where `N` is the length of the list

Space: `O(1)`

- [JavaScript](./palindrome-linked-list.js)
- [TypeScript](./palindrome-linked-list.ts)
- [Java](./palindrome-linked-list.java)
- [Go](./palindrome-linked-list.go)

</details>
