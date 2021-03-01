package distributecandies

func distributeCandies(candyType []int) int {
	n := len(candyType)
	set := map[int]bool{}
	for _, candy := range candyType {
		set[candy] = true
	}
	if len(set) < n/2 {
		return len(set)
	}
	return n / 2
}
