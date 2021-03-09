package customsortstring

func customSortString(S string, T string) string {
	freq := make([]int, 26)

	for _, char := range T {
		freq[char-'a']++
	}

	sb := []byte{}

	for i := range S {
		char := S[i]
		for freq[char-'a'] > 0 {
			sb = append(sb, char)
			freq[char-'a']--
		}
	}

	for i := range freq {
		char := byte(i + 'a')
		for freq[i] > 0 {
			sb = append(sb, char)
			freq[i]--
		}
	}
	return string(sb)
}
