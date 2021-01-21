package longestconsecutivesequence

import "sort"

// Sorting
func longestConsecutive(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	sort.Ints(nums)

	max := 0
	maxSeq := 1

	for i := 1; i < len(nums); i++ {
		if nums[i]-nums[i-1] == 1 {
			maxSeq++
		} else if nums[i-1] == nums[i] {
			continue
		} else {
			if maxSeq > max {
				max = maxSeq
			}
			maxSeq = 1
		}
	}

	if maxSeq > max {
		max = maxSeq
	}

	return max
}
