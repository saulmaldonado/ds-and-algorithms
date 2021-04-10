package verifyinganaliendictionary

func isAlienSorted(words []string, order string) bool {
	alphabet := [26]int{}

	n := len(order)

	for i := 0; i < n; i++ {
		alphabet[order[i]-'a'] = i
	}

	for i := 0; i < len(words)-1; i++ {
		for j := 0; j < len(words[i]); j++ {

			if j == len(words[i+1]) {
				return false
			}

			firstChar := words[i][j] - 'a'
			secondChar := words[i+1][j] - 'a'

			if alphabet[firstChar] > alphabet[secondChar] {
				return false
			}

			if alphabet[firstChar] < alphabet[secondChar] {
				break
			}
		}
	}
	return true

}
