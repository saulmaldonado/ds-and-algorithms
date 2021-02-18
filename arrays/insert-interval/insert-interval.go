package insertinterval

func insert(intervals [][]int, newInterval []int) [][]int {
	ans := [][]int{}

	n := len(intervals)

	i := 0

	for i < n && intervals[i][1] < newInterval[0] {
		ans = append(ans, intervals[i])
		i++
	}

	for i < n && intervals[i][0] <= newInterval[1] {
		if intervals[i][0] < newInterval[0] {
			newInterval[0] = intervals[i][0]
		}

		if intervals[i][1] > newInterval[1] {
			newInterval[1] = intervals[i][1]
		}
		i++
	}

	ans = append(ans, newInterval)

	for i < n {
		ans = append(ans, intervals[i])
		i++
	}

	return ans
}
