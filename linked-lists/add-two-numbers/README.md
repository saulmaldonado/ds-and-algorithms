# Add Two Numbers

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

<!-- any examples -->

### Example 1:

![Example 1](./images/addtwonumber1.jpg)

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

### Example 2:

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

### Example 2:

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

### Constraints

`The number of nodes in each linked list is in the range [1, 100].`

`0 <= Node.val <= 9`

`It is guaranteed that the list represents a number that does not have leading zeros.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

The solution can be as simple as adding together the node values of `l1` and `l2` as we traverse the lists simultaneously create new ListNodes for our final list.

However, since each node can only store values of up to 9, any time we have a sum of 10 or more, we have to store our carry over value to add to our upcoming node sum. We can derive the `carryOver` value by doing `sum / 10 (Math.floor to truncate in JavaScript)` and storing that number for the next sum. Once we come up to the next sum we'll add the `carryOver` value and reset our `carryOver`. This will go on until there are no longer any node in each list. If there still is a `carryOver` value, we can append it to the resulting list as a new ListNode

- [JavaScript](./add-two-numbers.js)
- [TypeScript](./add-two-numbers.ts)
- [Java](./add-two-numbers.java)
- [Go](./add-two-numbers.go)
</details>
