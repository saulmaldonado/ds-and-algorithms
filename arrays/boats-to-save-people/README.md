# Boats to Save People

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person. (It is guaranteed each person can be carried by a boat.)

<!-- any examples -->

### Example 1:

```
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
```

### Example 2:

```
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
```

### Example 3:

```
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
```

### Constraints

`1 <= people.length <= 50000`

`1 <= people[i] <= limit <= 30000`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

We can take a greedy approach to fill all of the boats to their limit. By "greedy" this means putting all of the heaviest people in their own boat and if the difference between the current weight and the limit weight is enough to fit in one of the smaller people, We can included that person and in the boat.

Sorting that array will make accessing the next heaviest `j` and next lightest `i` persons. We will need one pointer at each end and will traverse the array until one crosses the other.

For every loop we will increment the number of boats needed. We will also decrement `j` representing including the next heaviest person in the current boat. If we are able to include the next lightest person in the boats without going over the limit `person[i] + person[j] <= limit` we can increment the `i` pointer representing including the next lightest person in the current boat

- [JavaScript](./boats-to-save-people.js)
- [TypeScript](./boats-to-save-people.ts)
- [Java](./boats-to-save-people.java)
- [Go](./boats-to-save-people.go)
</details>
