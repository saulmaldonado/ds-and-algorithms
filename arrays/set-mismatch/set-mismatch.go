package setmismatch

func findErrorNums(nums []int) []int {
	dup := -1
	mis := -1

	n := len(nums)

	for _, num := range nums {
		if num < 0 {
			num *= -1
		}
		if nums[num-1] < 0 {
			dup = num
		} else {
			nums[num-1] *= -1
		}
	}

	for i := range nums {
		if nums[i] > 0 {
			mis = i + 1
		}
	}
	return []int{dup, mis}
}

func findErrorNums2(nums []int) []int {
	set := map[int]bool{}
	n := len(nums)
	sum := n * (n + 1) / 2
	dup := -1

	for _, num := range nums {
		if !set[num] {
			set[num] = true
			sum -= num
		} else {
			dup = num
		}
	}
	return []int{dup, sum}
}
