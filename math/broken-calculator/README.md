# Broken Calculator

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

On a broken calculator that has a number showing on its display, we can perform two operations:

Double: Multiply the number on the display by 2, or;
Decrement: Subtract 1 from the number on the display.
Initially, the calculator is displaying the number X.

Return the minimum number of operations needed to display the number Y.

### Example 1

```
Input: X = 2, Y = 3
Output: 2
Explanation: Use double operation and then decrement operation {2 -> 4 -> 3}.
```

### Example 2

```
Input: X = 5, Y = 8
Output: 2
Explanation: Use decrement and then double {5 -> 4 -> 8}.
```

### Example 3

```
Input: X = 3, Y = 10
Output: 3
Explanation:  Use double, decrement and double {3 -> 6 -> 5 -> 10}.
```

### Example 4

```
Input: X = 1024, Y = 1
Output: 1023
Explanation: Use decrement operations 1023 times.
```

### Constraints

`1 <= X <= 10^9`

`1 <= Y <= 10^9`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Sub problems and working backwards

If we want to get to the `Y` as quickly as possible, we have several optimized moves we can make:

1. If `X == Y`, make 0 moves.
2. If `X > Y`, we have to make at most `X - Y` moves since we can only decrement `X` by one.
3. If `Y` is **even**, we can get to `Y` in one move by doubling `Y/2`
4. If `Y` is **odd**, we can get to `Y` in one move by decrementing `Y + 1`

If for example `X = 2` and `Y = 3` we know the we can get to `Y` in one move if we turn `X` into `Y + 1` and decrement it. If thats the case then we'll need to find the most optimized way to get `X` from `2` to `4`. This suddenly become a problem of recursively solving sub problems until we reach a base case which can be either `1` or `2` from the list.

```
brokenCalc(2, 3) // moves: 1
  brokenCalc(2, 4) // moves: 1
    brokenCalc(2, 2) // moves: 0
```

We can use recursion to solve this or we can do it iteratively by "working backwards" where we halve and increment `Y`. Since both of our base cases requires `Y` to be `X > Y` or `X == Y`, then we can continue to halve and increment `Y` until it reaches one of these base cases

```
X = 2, Y = 3 // Y is odd, increment Y

X = 2, Y = 4 // Y even, halve Y

X = 2, Y = 2 // X and Y are equal, return 0 plus all other moves made
```

Time: `O(log Y)`, (Since we know that the majority of our operations will come from halving `Y` until it becomes less than or equal to `X`)

Space: `O(1)`

- [JavaScript](./broken-calculator.js)
- [TypeScript](./broken-calculator.ts)
- [Java](./broken-calculator.java)
- [Go](./broken-calculator.go)

</details>
