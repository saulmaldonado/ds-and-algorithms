package boatstosavepeople

import "sort"

func numRescueBoats(people []int, limit int) int {
	sort.Ints(people)
	i := 0
	j := len(people) - 1
	boats := 0

	for i <= j {
		boats++
		if people[i]+people[j] <= limit {
			i++
		}
		j--
	}

	return boats
}
