# Score of Parentheses

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given a balanced parentheses string S, compute the score of the string based on the following rule:

- () has score 1
- AB has score A + B, where A and B are balanced parentheses strings.
- (A) has score 2 \* A, where A is a balanced parentheses string.

### Example 1

```
Input: "()"
Output: 1
```

### Example 2

```
Input: "(())"
Output: 2
```

### Example 3

```
Input: "()()"
Output: 2
```

### Example 4

```
Input: "(()(()))"
Output: 6
```

### Constraints

`S is a balanced parentheses string, containing only ( and ).`

`2 <= S.length <= 50`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Stack

If we think of the layers of parentheses as levels then we can calculate the score by recursively calculating each level to its base case `()` and double on the way up. We can do this using stack that represents the score at each level where every `(` indicates the start of a level and `)` indicates the end of a level.

```
"(()(()))"

1. "(      )"

2. " ()(  ) "

3. "    ()  "
```

If we know that every `()` is one we can add that to the score of the levels

```
"(()(()))"

1. "(        )"

2. " (1)(   ) " score = 1

3. "     (1)  " score = 1
```

Working our way back up, we can calculate the score of a parent level by doubling its child level

```
"(()(()))"

1. "(    3*2    )" score = 6

2. " (1) + (1*2) " score = 3

3. "        (1)  " score = 1
```

Time: `O(N)` Where `N` is the length of the string

Space: `O(N)`

#### Multiplier

We can solve this with constant memory by instead using a multiplier to increase the score of nested parentheses.

There are two cases for a `(`. either its an opening parentheses that neighbors a `)`, or neighbors a `(`.

If it neighbors a `(` then we can consider it a score of `1`. If it is a `(` then we know that it is a nested level where `()` is valued at double the score. To keep track of how many levels deep we are, we'll keep track of a multiplier that starts at `1` and doubles for every `((` and halves at every `)` we find. Every time we find a `()` we will multiply it by the multiplier to get its real score.

Time: `O(N)` Where `N` is the length of the string

Space: `O(1)`

- [JavaScript](./score-of-parentheses.js)
- [TypeScript](./score-of-parentheses.ts)
- [Java](./score-of-parentheses.java)
- [Go](./score-of-parentheses.go)

</details>
