package longestsubstringwithoutrepeatingcharacters

func lengthOfLongestSubstring(s string) int {
	n := len(s)
	maxLength := 0
	indexMap := make(map[byte]int)

	j := 0

	for i := 0; i < n; i++ {
		curr := s[i]

		if indexMap[curr] != 0 {
			if indexMap[curr] > j {
				j = indexMap[curr]
			}
		}

		currLength := i - j + 1

		if currLength > maxLength {
			maxLength = currLength
		}

		indexMap[curr] = i + 1

	}

	return maxLength

}
