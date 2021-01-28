package singlenumber

func singleNumber(nums []int) int {
	sum := 0

	for _, n := range nums {
		sum ^= n
	}

	return sum

}
