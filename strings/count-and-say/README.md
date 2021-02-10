# Count and Say

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

- countAndSay(1) = "1"
- countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
  To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":

Given a positive integer n, return the nth term of the count-and-say sequence.

![Example](./images/example.png)

### Example 1

```
Input: n = 1
Output: "1"
Explanation: This is the base case.
```

### Example 2

```
Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
```

### Constraints

`1 <= n <= 30`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### "Read" Number From Left To Right

Since we are only given one base case for `1`, we'll need to recursively build our string from `1` to `n - 1`.

If count-and-say is simply reading the number from left the right, we can do this by iterating over the digits of the given number and keep count of the all the _consecutive duplicate_ numbers. Once we come across a different number, we would need to append the current number we're keeping track of and its count onto a string in the order `"count" + "number"`

```
""

"3322251" // There are 2 "3"s, said out loud as "23"
  ^

"23"
"332251" // There are 2 "2"s, said out loud as "22"
    ^

"2322"
"332251" // There is 1 "5", said out loud as "15"
     ^

"232215"
"332251" // There is 1 "1", said out loud as "11"
      ^

"23221511"
```

Time: `O(M * n-1)` Where `M` is the average length of number string generated. Can be done most efficiently with a character array or StringBuilder

Space: `O(M*2)` Worst case there are no _consecutive duplicate_ numbers.

- [JavaScript](./count-and-say.js)
- [TypeScript](./count-and-say.ts)
- [Java](./count-and-say.java)
- [Go](./count-and-say.go)

</details>
