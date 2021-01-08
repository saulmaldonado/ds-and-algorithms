# Generate Parentheses

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

<!-- any examples -->

### Example 1:

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

### Example 2:

```
Input: n = 1
Output: ["()"]
```

### Constraints

`1 <= n <= 8`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

_Well-formed_ parentheses always begin with an opening `(` and are complemented by a closing `)` anywhere after in the array. There cannot be more than `n` opening brackets and at any point in the array there cannot be more closed brackets than opening brackets. We can create all possible valid combinations by backtracking to open parentheses and converting them to closing where ever possible by keeping count of all open and closed parentheses

1. first start with building a string starting with all opening parentheses possible. (n)

```
"((("
```

2. Add all its complementing closings.

```
"((((" + "))))"
```

3. backtrack to the first opening parentheses and convert it to a closing. Keeping track of opening and closing parentheses convert the following to the appropriate opening and closing. General rule for backtracking the parentheses is to fill the rest of the string with as much opening and fill the rest wil closing

```
"((()""()))"
"((()" ")())"
"((()" "))()"
"(()" "(())"
"(()" "()())"
"(()" "())()"
"(()" ")(())"
```

4. backtracking will repeat until the first opening parentheses. for every parentheses built, they will be added to the result string list.

<!-- relative links to solution files. {title} should be replaced with the name of the problem in `kebab-case` -->

- [JavaScript](./generate-parentheses.js)
- [TypeScript](./generate-parentheses.ts)
- [Java](./generate-parentheses.java)
- [Go](./generate-parentheses.go)
</details>
