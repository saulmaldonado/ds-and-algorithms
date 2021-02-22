package longestwordindictionarythroughdeleting

func findLongestWord(s string, d []string) string {
	maxString := ""

	for _, str := range d {
		if search(s, str) {
			if len(str) > len(maxString) || (len(str) == len(maxString) && str < maxString) {
				maxString = str
			}
		}
	}
	return maxString
}

func search(s string, word string) bool {
	i := 0
	j := 0
	n := len(s)
	m := len(word)

	for i < n && j < m {
		if s[i] == word[j] {
			i++
			j++
		} else {
			i++
		}
	}
	return i == m
}
