# Palindrome Number

## Difficulty

<!-- choose one -->

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Follow up: Could you solve it without converting the integer to a string?

<!-- any examples -->

### Example 1:

```
Input: x = 121
Output: true
```

### Example 2:

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

### Example 3:

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

### Example 4:

```
Input: x = -101
Output: false
```

### Constraints

`-231 <= x <= 231 - 1`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

Without converting the number into a string, we can solve this through "peeking" and "popping" digits from x and "pushing" them into a new reversed number.

Peeking

```
We can get the value of the right most digit of a number by using mod 10 `% 10`. This mostly resembles a "peek" method for a stack

123 % 10 = 3
```

Pushing

```
To push a new digit from the end we have to shift all of the existing digits to the left one place. This can be done by multiplying the current value which then leaves an empty `0` in the right most place. We can then just add the digits we want to push
12 * 10 = 120

120 + 3 = 123
```

Popping

```
After using the right most digit, we need to get rid of it to get access of the digit in the next place. We can "shift" the digits to the right by diving the number by 10 and truncating the result to leave out any decimals

123 / 10 = 12.3
12.3 = 12
```

- [JavaScript](./palindrome-number.js)
- [TypeScript](./palindrome-number.ts)
- [Java](./palindrome-number.java)
- [Go](./palindrome-number.go)
</details>
