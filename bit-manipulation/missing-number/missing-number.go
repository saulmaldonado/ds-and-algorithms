package missingnumber

func missingNumber(nums []int) int {
	n := len(nums)
	missing := n

	for i := range nums {
		missing ^= i
		missing ^= nums[i]
	}
	return missing
}

func missingNumber2(nums []int) int {
	n := len(nums)
	sum := n * (n + 1) / 2

	for _, num := range nums {
		sum -= num
	}
	return sum
}
