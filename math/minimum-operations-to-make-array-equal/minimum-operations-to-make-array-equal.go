package minimumoperationstomakearrayequal

func minOperations(n int) int {
	if n%2 == 1 {
		n /= 2
		return n * (n + 1)
	}

	n /= 2
	return n * n
}
