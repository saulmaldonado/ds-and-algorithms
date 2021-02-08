package substringwithconcatenationofallwords

func findSubstring(s string, words []string) []int {
	res := []int{}
	mp := map[string]int{}

	for _, w := range words {
		if _, ok := mp[w]; !ok {
			mp[w] = 0
		}
		mp[w]++
	}

	wordsLen := len(words)
	ln := len(words[0])

	for i := 0; i < ln; i++ {
		search(s, mp, &res, i, ln, wordsLen)
	}
	return res
}

func search(s string, mp map[string]int, res *[]int, i int, ln int, wordsLen int) {
	seen := map[string]int{}

	count := 0
	start := i

	for ; i <= len(s)-ln; i += ln {
		word := s[i : i+ln]

		if _, ok := mp[word]; ok {
			if _, ok := seen[word]; !ok {
				seen[word] = 0
			}
			seen[word]++
			count++

			for seen[word] > mp[word] {
				left := s[start : start+ln]

				seen[left]--

				count--
				start += ln
			}

			if count == wordsLen {
				*res = append(*res, start)

				left := s[start : start+ln]

				seen[left]--
				count--
				start += ln
			}
		} else {
			seen = map[string]int{}
			start = i + ln
			count = 0
		}
	}
}
