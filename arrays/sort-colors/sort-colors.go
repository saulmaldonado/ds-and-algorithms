package sortcolors

func sortColors(nums []int) {
	n := len(nums)

	left := 0
	right := n - 1

	i := 0

	for i <= right {
		if nums[i] == 0 {
			nums[left], nums[i] = nums[i], nums[left]
			left++
		} else if nums[i] == 2 {
			nums[right], nums[i] = nums[i], nums[right]
			right--
			i--
		}

		i++
	}
}
