package arithmeticslices

func numberOfArithmeticSlices(A []int) int {
	dp := 0
	sum := 0
	n := len(A)

	for i := 2; i < n; i++ {
		if A[i]-A[i-1] == A[i-1]-A[i-2] {
			dp++
			sum += dp
		} else {
			dp = 0
		}
	}
	return sum
}
