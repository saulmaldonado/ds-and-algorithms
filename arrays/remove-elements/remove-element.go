package removeelement

func removeElement(nums []int, val int) int {
	j := 0

	for i := range nums {
		if nums[i] != val {
			nums[j] = nums[i]
			j++
		}
	}

	return j
}
