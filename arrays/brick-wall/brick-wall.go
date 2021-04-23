package brickwall

func leastBricks(wall [][]int) int {
	count := map[int]int{}

	for _, list := range wall {
		edge := 0
		for i := 0; i < len(list)-1; i++ {
			edge += list[i]
			if _, ok := count[edge]; !ok {
				count[edge] = 0
			}
			count[edge]++
		}
	}

	max := 0

	for _, v := range count {
		if v > max {
			max = v
		}
	}
	return len(wall) - max
}
