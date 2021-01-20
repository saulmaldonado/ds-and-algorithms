# Merge Intervals

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

### Example 1:

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

### Example 2:

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

### Constraints

`1 <= intervals.length <= 104`

`intervals[i].length == 2`

`0 <= starti <= endi <= 104`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

The problem states that we need to merge overlapping intervals. There are two cases where overlapping happens:

1. One interval ends after another interval starts.
2. One interval ends after another interval starts and ends.

For the first case, we want to change the first interval to end at the same time of the overlapped interval. We can simply update the ending time of the first interval to the ending time of the second interval

For the second case, the first interval completely overlap the second interval. This means we can simply remove the overlapped interval from our list.

For every interval, we need to find another interval with the closest starting time. To do this we can search the array for our next closest interval but this we cost us a lot of operations. To optimize this we can initially sort that intervals in the array by their starting time. This way the next possible interval will always be to the right of the current interval.

To keep track of our new schedule, we will create a new list that we'll add the newly merged intervals. Initially we will insert the first interval in our array. As we traverse the rest of the intervals, we will check it the ending time of our last interval in our list overlaps the starting time of our current interval. If it does we can simply update the ending time of the interval already in our list to the ending time in our current interval. If it does not, we can't merge the intervals. We can add the current interval to our list.

We do have to take into account for completely overlapped intervals. If the ending time of the current interval is less than the ending time of the last interval in our list we do not need to update the ending time of the interval in our list. To take this into account, we can the assign the ending time of the last interval to the `max(lastEndingTime, currentEndingTime)`

Time: O(n log n)
Space: O(n)

- [JavaScript](./merge-intervals.js)
- [TypeScript](./merge-intervals.ts)
- [Java](./merge-intervals.java)
- [Go](./merge-intervals.go)
</details>
