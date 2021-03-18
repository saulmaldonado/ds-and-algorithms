package wigglesubsequence

func wiggleMaxLength(nums []int) int {
	n := len(nums)

	if n < 2 {
		return n
	}

	prev := nums[0] - nums[1]

	count := 1

	if prev != 0 {
		count++
	}

	for i := 2; i < n; i++ {
		diff := nums[i-1] - nums[i]

		if (diff > 0 && prev <= 0) || (diff < 0 && prev >= 0) {
			count++
			prev = diff
		}
	}

	return count
}
