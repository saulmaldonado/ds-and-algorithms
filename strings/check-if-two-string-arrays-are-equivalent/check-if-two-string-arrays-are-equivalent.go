func arrayStringsAreEqual(word1 []string, word2 []string) bool {
	i := 0
	j := 0

	for a, b := 0, 0; i < len(word1) && j < len(word2); {
		currString1 := word1[i]
		currChar1 := currString1[a]
		a++

		currString2 := word2[j]
		currChar2 := currString2[b]
		b++

		if currChar1 != currChar2 {
			return false
		}

		if a == len(currString1) {
			a = 0
			i++
		}

		if b == len(currString2) {
			b = 0
			j++
		}
	}

	return i == len(word1) && j == len(word2)
}
