package combinationsum

import "sort"

func combinationSum(candidates []int, target int) [][]int {
	ans := [][]int{}

	if len(candidates) == 0 {
		return ans
	}

	sort.Ints(candidates)

	list := []int{}

	add(candidates, target, 0, &ans, &list, 0)

	return ans
}

func add(candidates []int, target int, sum int, ans *[][]int, list *[]int, start int) {
	if sum == target {
		c := make([]int, len(*list))
		copy(c, *list)
		*ans = append(*ans, c)
	} else if sum > target {
	} else {
		for i := start; i < len(candidates); i++ {
			sum += candidates[i]

			*list = append(*list, candidates[i])

			add(candidates, target, sum, ans, list, i)
			s := *list
			*list = s[:len(s)-1]
			sum -= candidates[i]
		}
	}
}
