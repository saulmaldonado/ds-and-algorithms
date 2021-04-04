package wordsubsets

func wordSubsets(A []string, B []string) []string {
	maxFreqB := [26]int{}

	for _, b := range B {
		freqB := count(b)

		for i := range maxFreqB {
			if freqB[i] > maxFreqB[i] {
				maxFreqB[i] = freqB[i]
			}
		}
	}

	ans := make([]string, 0)

	for i := range A {
		freqA := count(A[i])

		if compare(freqA, maxFreqB) {
			ans = append(ans, A[i])
		}
	}

	return ans
}

func count(S string) [26]int {
	freq := [26]int{}

	for i := range S {
		freq[S[i]-'a']++
	}

	return freq
}

func compare(A [26]int, B [26]int) bool {
	for i := range A {
		if A[i] < B[i] {
			return false
		}

		return true
	}
}
