# Word Ladder

## Difficulty

<!-- choose one -->

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

- Only one letter can be changed at a time.
- Each transformed word must exist in the word list.

Return 0 if there is no such transformation sequence.

<!-- any examples -->

### Example 1:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
```

### Example 2:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
```

### Constraints

`1 <= beginWord.length <= 100`

`endWord.length == beginWord.length`

`1 <= wordList.length <= 5000`

`wordList[i].length == beginWord.length`

`beginWord, endWord, and wordList[i] consist of lowercase English letters.`

`beginWord != endWord`

`All the strings in wordList are unique.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

All possible paths from `beginWord` to `endWord` can best be described as a undirected graph.

Every word can have multiple possible transformations that are included in `wordList` including transformation from one word to another and vice versa (cyclical). This means there can be infinite paths from `beginWord` to `endWord`. We can use either DFS or BFS search to find the smallest path. DFS requires the most operations since it requires that we traverse all possible paths, exclude visited paths and find the shortest of all. With BFS we can shorten to number of operations by traversing the graph, excluding visited paths, all the way until we find the first possible path to `endWord`

For `beginWord` we can find all possible transformation by changing each letter of the word to every other letter in the alphabet and finding the transformation in `wordList`. If found we can the transformation to a queue to try all of its possible transformation. Once we are able to transform a word to the `endWord` we can immediately return the transformation we've done +1 or the level of the graph we've traversed +1

To prevent cycles we can use a set representing the possible non-visited transformations we can make from `wordList`. Using a set is more efficient than using the provided ArrayList

```
beginWord = "hit", endWord = "cog"

["hot","dot","dog","lot","log","cog"]

queue = [hot] level = 1

queue = [dot, lot] level = 2

queue = [dog, log] level = 3

queue = [cog] level = 4

ans = level + 1 = 5
```

- [JavaScript](./word-ladder.js)
- [TypeScript](./word-ladder.ts)
- [Java](./word-ladder.java)
- [Go](./word-ladder.go)
</details>
