package globalandlocalinversions

func isIdealPermutation(A []int) bool {
	for i := range A {
		diff := A[i] - i
		if diff < -1 || diff > 1 {
			return false
		}
	}
	return true
}
