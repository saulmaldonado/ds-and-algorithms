func reverse(x int) int {
	rev := 0

	for x != 0 {
		add := x % 10

		x /= 10

		if rev > math.MaxInt32/10 || (rev == math.MaxInt32/10 && add > 7) {
			return 0
		}

		if rev < math.MinInt32/10 || (rev == math.MinInt32/10 && add < -8) {
			return 0
		}

		rev = rev*10 + add
	}

	return rev
}
