package shortencodingofwords

func minimumLengthEncoding(words []string) int {
	wordsIncluded := map[string]bool{}

	for _, word := range words {
		wordsIncluded[word] = true
	}

	for _, word := range words {
		for i := 1; i < len(word); i++ {
			prefix := word[i:]

			if _, ok := wordsIncluded[prefix]; ok {
				delete(wordsIncluded, prefix)
			}
		}
	}

	l := 0

	for word := range wordsIncluded {
		l += len(word) + 1
	}

	return l
}
