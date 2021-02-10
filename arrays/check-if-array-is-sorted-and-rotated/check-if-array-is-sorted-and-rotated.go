func check(nums []int) bool {
	count := 0
	n := len(nums)

	for i := 0; i < n; i++ {
		next := nums[(i+1)%n]
		if nums[i] > next {
			count++
		}

		if count > 1 {
			return false
		}
	}
	return true
}
