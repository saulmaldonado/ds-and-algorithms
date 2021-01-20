package mergeintervals

import "sort"

type byStarting [][]int

func (a byStarting) Len() int           { return len(a) }
func (a byStarting) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a byStarting) Less(i, j int) bool { return a[i][0] < a[j][0] }

func merge(intervals [][]int) [][]int {
	ans := [][]int{}

	sort.Sort(byStarting(intervals))

	for i := range intervals {
		starts := intervals[i][0]
		ends := intervals[i][1]

		if len(ans) == 0 || ans[len(ans)-1][1] < starts {
			ans = append(ans, intervals[i])
		} else {
			if ans[len(ans)-1][1] < ends {
				ans[len(ans)-1][1] = ends
			}
		}
	}
	return ans
}
