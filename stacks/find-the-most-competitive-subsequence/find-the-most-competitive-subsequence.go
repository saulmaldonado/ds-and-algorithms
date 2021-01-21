package findthemostcompetitivesubsequence

func mostCompetitive(nums []int, k int) []int {
	stack := []int{}
	n := len(nums)

	for i := range nums {
		for len(stack) > 0 && stack[len(stack)-1] > nums[i] && k < len(stack)+n-i {
			stack = stack[:len(stack)-1]
		}

		if len(stack) < k {
			stack = append(stack, nums[i])
		}
	}

	arr := make([]int, k)

	for i := k - 1; i >= 0; i-- {
		arr[i] = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
	}

	return arr
}
