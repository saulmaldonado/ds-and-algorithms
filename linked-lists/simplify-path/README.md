# Simplify Path

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

The canonical path should have the following format:

- The path starts with a single slash '/'.
- Any two directories are separated by a single slash '/'.
- The path does not end with a trailing '/'.
- The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')

Return the simplified canonical path.

### Example 1:

```
Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
```

### Example 2:

```
Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
```

### Example 3:

```
Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
```

### Example 4:

```
Input: path = "/a/./b/../../c/"
Output: "/c"
```

### Constraints

`1 <= path.length <= 3000`

`path consists of English letters, digits, period '.', slash '/' or '_'.`

`path is a valid absolute Unix path.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Linked List Queue

We'll need a data structure to represent our directories. Order here matters, our directories must come after its parent dir and before its child dir. We'll need some reference to the current directory that we can track backwards to its parent directory in the case of `..`.

If you think about what a is its a organized space with references to files and other directories. In a path, directories are separated by `/` where one directory that comes before another in a path is said to point to the later dir. We can best represent this as a Linked List. For example:

```
path = '/root/home/docs'

root -> home -> docs
```

Here the tail of the list represents the current directory

`..` indicates backtracking to the parent directory of the current directory. We can represent this in a Linked List by pointing the tail to the parent of the last directory.

```
path = '/root/home/docs/..'

root -> home -> docs <- tail

// .. backtrack

root -> home <- tail
```

Note: `./` is redundant and has the same effect as an empty string. We can skip `.` the same way we skip empty string between directories `/""/`.

Once we go through all the paths, all the string in between `/`, we can convert the list into a string by one by one combining the nodes from left to right with `/` in between

Note: We can also represent the linked list as an array though not as performant when it comes to polling from the front

Time: `O(N)` Where `N` is the total number of directories or names between `/`

Space: `O(N)`

- [JavaScript](./simplify-path.js)
- [TypeScript](./simplify-path.ts)
- [Java](./simplify-path.java)
- [Go](./simplify-path.go)
</details>
