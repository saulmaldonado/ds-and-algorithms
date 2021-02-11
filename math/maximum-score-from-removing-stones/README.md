# Maximum Score From Removing Stones

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

You are playing a solitaire game with three piles of stones of sizes a​​​​​​, b,​​​​​​ and c​​​​​​ respectively. Each turn you choose two different non-empty piles, take one stone from each, and add 1 point to your score. The game stops when there are fewer than two non-empty piles (meaning there are no more available moves).

Given three integers a​​​​​, b,​​​​​ and c​​​​​, return the maximum score you can get.

### Example 1

```
Input: a = 2, b = 4, c = 6
Output: 6
Explanation: The starting state is (2, 4, 6). One optimal set of moves is:
- Take from 1st and 3rd piles, state is now (1, 4, 5)
- Take from 1st and 3rd piles, state is now (0, 4, 4)
- Take from 2nd and 3rd piles, state is now (0, 3, 3)
- Take from 2nd and 3rd piles, state is now (0, 2, 2)
- Take from 2nd and 3rd piles, state is now (0, 1, 1)
- Take from 2nd and 3rd piles, state is now (0, 0, 0)
There are fewer than two non-empty piles, so the game ends. Total: 6 points.
```

### Example 2

```
Input: a = 4, b = 4, c = 6
Output: 7
Explanation: The starting state is (4, 4, 6). One optimal set of moves is:
- Take from 1st and 2nd piles, state is now (3, 3, 6)
- Take from 1st and 3rd piles, state is now (2, 3, 5)
- Take from 1st and 3rd piles, state is now (1, 3, 4)
- Take from 1st and 3rd piles, state is now (0, 3, 3)
- Take from 2nd and 3rd piles, state is now (0, 2, 2)
- Take from 2nd and 3rd piles, state is now (0, 1, 1)
- Take from 2nd and 3rd piles, state is now (0, 0, 0)
There are fewer than two non-empty piles, so the game ends. Total: 7 points.
```

### Example 3

```
Input: a = 1, b = 8, c = 8
Output: 8
Explanation: One optimal set of moves is to take from the 2nd and 3rd piles for 8 turns until they are empty.
After that, there are fewer than two non-empty piles, so the game ends.
```

### Constraints

`1 <= a, b, c <= 105`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Two Piles

If we want every stone to have a pair, we can simplify this problem by instead combining the two smaller piles into one. We do this optimistically because we want all the stone of the greatest pile, `c`, to pair with all the nodes of the lesser piles, `a` and `b`.

```
greater =  ******

lesser =  ** | ****

greater = * *   * * * *
lesser =  * * | * * * *
```

If the sum of the two lesser piles ends up being equal to the size of the greater pile, then all stones have a pair. We can have at most `(a + b + c)/ 2` pairs or points.

If the sum of the two lesser piles ends up being greater than the size of the greater pile, then all the stones in `c` will have pairs plus all remaining stones that can have a pair will have one. We can have at most `c` + `(a' + b') / 2` also expressed as `truncate((a + b + c) / 2)`

If we run into a scenario where sum of the two lesser piles ends up being less than the greater pile, then all the stones in `a` and `b` will have pairs while all of the remaining stones in `c` cannot be paired. We can have at most `(a + b + c) - c`

Time: `O(1)`

Space: `O(1)`

- [JavaScript](./maximum-score-from-removing-stones.js)
- [TypeScript](./maximum-score-from-removing-stones.ts)
- [Java](./maximum-score-from-removing-stones.java)
- [Go](./maximum-score-from-removing-stones.go)

</details>
