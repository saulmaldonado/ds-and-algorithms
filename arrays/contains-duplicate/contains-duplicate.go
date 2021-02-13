package containsduplicate

func containsDuplicate(nums []int) bool {
	set := map[int]bool{}

	for _, n := range nums {
		if set[n] == true {
			return true
		}
		set[n] = true
	}
	return false
}
