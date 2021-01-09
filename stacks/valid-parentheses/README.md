# Valid Parentheses

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

<!-- any examples -->

### Example 1:

```
Input: s = "()"
Output: true
```

### Example 2:

```
Input: s = "()[]{}"
Output: true
```

### Example 3:

```
Input: s = "(]"
Output: false
```

### Example 4:

```
Input: s = "([)]"
Output: false
```

### Example 5:

```
Input: s = "{[]}"
Output: true
```

### Constraints

`1 <= s.length <= 104`

`s consists of parentheses only '()[]{}'.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

For every opening bracket, there must be a closing bracket to the right. For nested brackets, the nested opening bracket must be closed before the outer bracket can, other wise the brackets are invalid. The order here matters since the last parentheses seen has to be the first one to have a corresponding closing bracket before the other opening brackets can be considered. This last in first out order of operations can be best done with a stack. For every opening bracket, we can push it to the stack as the last opening bracket seen. Every time we find a closing bracket we can check if we can find the corresponding opening bracket on the top of the stack (we can match these brackets with a map). If there is a match we can pop the opening bracket from the stack and continue with the next of the stack. By the end, all opening brackets must have seen their closing bracket and be popped from the stack. If there are any lingering open brackets in the stack, the parentheses is unbalanced.

```
"{[]}"
 ^

|   |
|   |
| { | -- insert

"{[]}"
  ^

|   |
| [ | -- insert
| { |

"{[]}"
   ^
  [ -- remove
|   |
|   |
| { |

"{[]}"
    ^
  { -- remove
|   |
|   |
|   |
```

- [JavaScript](./valid-parentheses.js)
- [TypeScript](./valid-parentheses.ts)
- [Java](./valid-parentheses.java)
- [Go](./valid-parentheses.go)
</details>
