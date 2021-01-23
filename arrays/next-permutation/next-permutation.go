package nextpermutation

import "sort"

func nextPermutation(nums []int) {
	n := len(nums)
	i := n - 2

	for i >= 0 && nums[i+1] <= nums[i] {
		i--
	}

	if i < 0 {
		sort.Ints(nums)
	} else {
		j := len(nums) - 1

		for j >= 0 && nums[j] <= nums[i] {
			j--
		}

		temp := nums[i]
		nums[i] = nums[j]
		nums[j] = temp

		sort.Ints(nums[i+1 : n])
	}
}
