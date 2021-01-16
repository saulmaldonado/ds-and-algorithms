package kthlargestelementinanarray

import "sort"

func findKthLargest(nums []int, k int) int {
	sort.Ints(nums)

	return nums[len(nums)-k]
}

func findKthLargest(nums []int, k int) int {
	k = len(nums) - k

	start := 0
	end := len(nums) - 1

	for start < end {
		pivot := nums[start]
		j := start

		swap(start, end, nums)

		for i := start; i < end; i++ {
			if nums[i] <= pivot {
				swap(i, j, nums)
				j++
			}
		}
		swap(j, end, nums)

		if j == k {
			return pivot
		} else if j < k {
			start = j + 1
		} else {
			end = j - 1
		}
	}

	return nums[start]
}

func swap(i int, j int, nums []int) {
	temp := nums[i]
	nums[i] = nums[j]
	nums[j] = temp
}
