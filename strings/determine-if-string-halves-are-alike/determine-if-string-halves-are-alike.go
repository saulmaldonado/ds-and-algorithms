package determineifstringhalvesarealike

import "unicode"

func halvesAreAlike(s string) bool {
	n := len(s)

	firstCount := 0
	secondCount := 0

	i := 0
	j := n / 2

	for j < n {
		if isVowel(rune(s[i])) {
			firstCount++
		}

		if isVowel(rune(s[j])) {
			secondCount++
		}

		i++
		j++
	}

	return firstCount == secondCount

}

func isVowel(c rune) bool {
	switch unicode.ToLower(c) {
	case 'a':
		return true
	case 'e':
		return true
	case 'i':
		return true
	case 'o':
		return true
	case 'u':
		return true
	}
	return false
}
