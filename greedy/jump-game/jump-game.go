func canJump(nums []int) bool {
	n := len(nums)
	jump := 0

	for i := 0; i < n-1; i++ {
		if jump-1 < nums[i] {
			jump = nums[i]
		} else {
			jump--
		}

		if jump == 0 {
			return false
		}
	}

	return true
}
