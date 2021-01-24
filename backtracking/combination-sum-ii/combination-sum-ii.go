package combinationsumii

import "sort"

func combinationSum2(candidates []int, target int) [][]int {
	sort.Ints(candidates)

	ans := [][]int{}
	list := []int{}

	backtrack(&ans, &list, candidates, target, 0)

	return ans
}

func backtrack(ans *[][]int, list *[]int, candidates []int, target int, start int) {
	if target == 0 {
		curr := make([]int, len(*list))
		copy(curr, *list)
		*ans = append(*ans, curr)
	} else if target > 0 {
		for k := start; k < len(candidates) && target >= candidates[k]; k++ {
			if k > start && candidates[k] == candidates[k-1] {
				continue
			} else {
				*list = append(*list, candidates[k])
				backtrack(ans, list, candidates, target-candidates[k], k+1)
				*list = (*list)[:len(*list)-1]
			}
		}
	}
}
