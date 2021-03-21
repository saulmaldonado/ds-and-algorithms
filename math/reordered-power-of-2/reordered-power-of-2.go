package reorderedpowerof2

func reorderedPowerOf2(N int) bool {
	nFreq := countDigits(N)
	i := 0

	for i < 30 {
		if equals(nFreq, countDigits(1<<i)) {
			return true
		}
		i++
	}
	return false
}

func countDigits(n int) []int {
	freq := make([]int, 10)

	for n > 0 {
		lastDigit := n % 10
		freq[lastDigit]++
		n /= 10
	}
	return freq
}

func equals(a, b []int) bool {
	if len(a) != len(b) {
		return false
	}

	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}
