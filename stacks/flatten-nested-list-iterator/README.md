# Flatten Nested List Iterator

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Problem description You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

Implement the NestedIterator class:

- NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
- int next() Returns the next integer in the nested list.
- boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.

### Example 1

```
Input: nestedList = [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].
```

### Example 2

```
Input: nestedList = [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
```

### Constraints

`input constraints`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

If we were dealing with a normal list we would flatten the entire list and its nested values in one pass. Since we are dealing with an iterator we want to lazily flatten the list where we evaluate each element as it reaches the end of the list and return it if its an interger or flatten it if its a list.

To do flatten lists and maintain the ordering of elements, we'll need a data structure that can add elements in the order given, take elements in the order given, and also stack series of elements on top of other series of elements. A stack works here since we can add and take elements in a last in first out method where the first elements we add are the elements of the given list. That way when we pop elements from the stack and come across a list, we can flatten the list and add all of the elements back to the top of the stack. This way we are able to maintain the order of elements we added first and add element on top of them be flattening nested lists

##### Implementation

<!-- [[1,1],2,[1,1]] -->

###### `public NestedIterator`

Our Stack will hold the elements in order. First we'll need to evaluate the list given to us from the constructor. If it a single integer then we can just add it to the stack. If its a list we'll need to iterate over the list and push them into the stack. Since pushing elements into stack and popping them will reverse its order we'll want to push the elements in reverse order.

```
[[1,1],2,[1,1]]

|         |
|  [1,1]  |
|    2    |
|  [1,1]  |
```

###### `public boolean hasNext()`

`hasNext()` will if there is an Integer on the top of the stack that we can pop from the stack using `next()`. If the stack is empty, we'll return `false`. If peeking the top of the stack reveals a list we want pop the list, add all its elements back on to the top of the list and once again check the top of the stack. If the top of the stack is an Integer we will return `true`.

```
[[1,1],2,[1,1]]

|         |
|  [1,1]  |
|    2    |
|  [1,1]  |

|         |
|    1    |
|    1    |
|    2    |
|  [1,1]  |
```

###### `public Integer next()`

`next()` Will call `hasNext()` check if the stack is not empty and contains an integer at the top. If the top contains a list `hasNext()` will flatten the list before `next()` pops it

Time: `O(N)` Where N is the total number of Integers among all lists

Space: `O(N)`

- [JavaScript](./flatten-nested-list-iterator.js)
- [TypeScript](./flatten-nested-list-iterator.ts)
- [Java](./flatten-nested-list-iterator.java)
- [Go](./flatten-nested-list-iterator.go)

</details>
