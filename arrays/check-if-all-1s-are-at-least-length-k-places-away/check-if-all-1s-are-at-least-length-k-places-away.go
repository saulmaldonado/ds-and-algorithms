package checkifall1sareatleastlengthkplacesaway

func kLengthApart(nums []int, k int) bool {
	prevIndex := -1
	for i := range nums {
		if nums[i] == 1 {
			if prevIndex != -1 && i-prevIndex-1 < k {
				return false
			}

			prevIndex = i
		}
	}

	return true
}
