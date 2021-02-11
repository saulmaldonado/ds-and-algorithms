package maximumscorefromremovingstones

func maximumScore(a int, b int, c int) int {
	max := a

	if b > max {
		max = b
	}

	if c > max {
		max = c
	}

	sum := a + b + c

	if sum-max < max {
		return sum - max
	}

	return sum / 2
}
