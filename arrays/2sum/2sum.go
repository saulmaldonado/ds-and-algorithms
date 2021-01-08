func twoSum(nums []int, target int) []int {
	hash := map[int]int{}

	for index, num := range nums {
		if val, ok := hash[target-num]; ok {
			return []int{index, val}
		}

		hash[num] = index

	}

	return []int{}
}
