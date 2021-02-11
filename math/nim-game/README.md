# Nim Game

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

You are playing the following Nim Game with your friend:

- Initially, there is a heap of stones on the table.
- You and your friend will alternate taking turns, and you go first.
- On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
  The one who removes the last stone is the winner.

Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

### Example 1

```
Input: n = 4
Output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.
```

### Example 2

```
Input: n = 1
Output: true
```

### Example 3

```
Input: n = 2
Output: true
```

### Constraints

`1 <= n <= 2^31 - 1`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Multiple of Four

If both players play optimally, a player inevitably will win if its their turn and there are only 1, 2, or 3 stones left in the pile. This is the desired winning state. If we want to inevitably get to this state there has to be a pile size where the opponent can take 1, 2, or 3 stones and the remaining stones will either be 1, 2, or 3. If we work backwards from having only 1 stone left in the pile we can see that `1 + 3`, where the opponent take 3 stones for their turn, is `4`. Working backwards from `2` we can see that `2 + 2`, where the opponent take `2` for their turn, is `4`. Working backwards from `3` we can see that `3 + 1`, where the opponent take 1 stone for their stone, is `4`.

```
      -1
****  ->  ***

      -2
****  ->  **

      -3
****  ->  *
```

Here we can see that `4` is the pile size that picking from will always lead to a losing move. The same pattern can repeat its self with all multiples of 4 `4,8,12,16...`

Time: `O(1)`

Space: `O(1)`

- [JavaScript](./title.js)
- [TypeScript](./title.ts)
- [Java](./title.java)
- [Go](./title.go)

</details>
