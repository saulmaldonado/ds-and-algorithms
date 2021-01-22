package determineiftwostringsareclose

import "sort"

func closeStrings(word1 string, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}

	chars1 := make([]int, 26)
	chars2 := make([]int, 26)

	for i := 0; i < len(word1); i++ {
		chars1[word1[i]-'a']++
		chars2[word2[i]-'a']++
	}

	for i := 0; i < len(chars1); i++ {
		if (chars1[i] == 0) != (chars2[i] == 0) {
			return false
		}
	}

	sort.Ints(chars1)
	sort.Ints(chars2)

	for i := 0; i < len(chars1); i++ {
		if chars1[i] != chars2[i] {
			return false
		}
	}

	return true
}
