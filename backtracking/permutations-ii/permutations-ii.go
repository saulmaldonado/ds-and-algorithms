package permutations

import "sort"

func permuteUnique(nums []int) [][]int {
	ans := [][]int{}
	list := []int{}
	visited := make([]bool, len(nums))

	sort.Ints(nums)
	backtrack(nums, &visited, &ans, &list)

	return ans
}

func backtrack(nums []int, visited *[]bool, ans *[][]int, list *[]int) {
	if len(*list) == len(nums) {
		listCopy := make([]int, len(*list))
		copy(listCopy, *list)

		*ans = append(*ans, listCopy)
	} else {
		for i := 0; i < len(nums); i++ {
			if (*visited)[i] {
				continue
			}

			(*visited)[i] = true
			*list = append(*list, nums[i])

			backtrack(nums, visited, ans, list)

			*list = (*list)[:len(*list)-1]
			(*visited)[i] = false

			for i < len(nums)-1 && nums[i] == nums[i+1] {
				i++
			}
		}
	}
}
