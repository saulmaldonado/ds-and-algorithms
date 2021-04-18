package canmakearithmeticprogressionfromsequence

import "math"

func canMakeArithmeticProgression(arr []int) bool {
	n := len(arr)
	min := math.MaxInt32
	max := math.MinInt32

	set := make(map[int]bool)

	for _, n := range arr {
		if n < min {
			min = n
		}

		if n > max {
			max = n
		}

		set[n] = true
	}

	d := max - min
	if d%(n-1) != 0 {
		return false
	}

	d /= n - 1
	i := 0

	for i < n {
		if !set[min] {
			return false
		}
		min += d
		i++
	}
	return true
}
