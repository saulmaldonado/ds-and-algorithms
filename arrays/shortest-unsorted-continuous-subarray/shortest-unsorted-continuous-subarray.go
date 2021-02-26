package shortestunsortedcontinuoussubarray

import "math"

func findUnsortedSubarray(nums []int) int {
	n := len(nums)

	max := math.MinInt32
	min := math.MaxInt32

	beg := -1
	end := -1

	for i := 0; i < n; i++ {
		if nums[i] > max {
			max = nums[i]
		}

		if nums[i] < max {
			end = i
		}
	}

	for i := n - 1; i >= 0; i-- {
		if nums[i] < min {
			min = nums[i]
		}

		if nums[i] > min {
			beg = i
		}
	}

	if beg == -1 || end == -1 {
		return 0
	}

	return end - beg + 1
}
