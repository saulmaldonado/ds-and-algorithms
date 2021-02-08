# Peeking Iterator

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().

### Example 1:

```
Assume that the iterator is initialized to the beginning of the list: [1,2,3].

Call next() gets you 1, the first element in the list.
Now you call peek() and it returns 2, the next element. Calling next() after that still return 2.
You call next() the final time and it returns 3, the last element.
Calling hasNext() after that should return false.
```

### Constraints

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Look Ahead Cache

If we want to implement a cache that we can peek the next element from, we'll need to `next()` the next element in advanced. This means that our `next()` and `hasNext()` methods will need need to access the cache instead of the underlying iterator since it will always be one step ahead.

##### `PeekingIterator()`

Will assign the given iterator to a field and will immediately populate the cache with the next element by calling `next()` on the given iterator. This will give the `peek()` readonly access to the next element.

##### `peek()`

Will simply return the cached value.

##### `next()`

Since the iterator is one step ahead, the cached value will be returned as the "next" value. Before that we will cache the very next value in the iterator by calling `next()` on the underlying iterator. If the iterator is empty the cache will be set to `null`.

##### `hasNext()`

Will simply return if the cached value is not `null` (its default value)

- [JavaScript](./peeking-iterator.js)
- [TypeScript](./peeking-iterator.ts)
- [Java](./peeking-iterator.java)
- [Go](./peeking-iterator.go)
</details>
