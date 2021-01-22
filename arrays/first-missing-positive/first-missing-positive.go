package firstmissingpositive

func firstMissingPositive(nums []int) int {
	n := len(nums)

	for i := 0; i < n; i++ {
		if nums[i] <= 0 || nums[i] > n {
			nums[i] = n + 1
		}
	}

	for i := 0; i < n; i++ {
		num := nums[i]

		if num < 0 {
			num = -num
		}

		if num > n {
			continue
		}

		if nums[num-1] > 0 {
			nums[num-1] = -1 * nums[num-1]
		}
	}

	for i := 0; i < n; i++ {
		if nums[i] > 0 {
			return i + 1
		}
	}
	return n + 1
}
