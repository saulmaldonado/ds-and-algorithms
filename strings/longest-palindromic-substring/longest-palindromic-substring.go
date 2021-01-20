package longestpalindromicsubstring

func longestPalindrome(s string) string {
	start := 0
	end := 0
	maxLen := 0

	for i := range s {
		len1 := findLongest(s, i, i)
		len2 := findLongest(s, i, i+1)

		leng := 0

		if len1 > len2 {
			leng = len1
		} else {
			leng = len2
		}

		if leng > maxLen {
			start = i - (leng-1)/2
			end = i + leng/2
			maxLen = leng
		}
	}

	return s[start : end+1]
}

func findLongest(s string, i int, j int) int {
	for i >= 0 && j < len(s) && s[i] == s[j] {
		i--
		j++
	}

	return j - i - 1
}

func longestPalindrome2(s string) string {
	s = insertHashes(s)

	lengths := make([]int, len(s))

	center := 0
	right := 0
	maxIndex := 0

	for i := range s {
		mirror := 2*center - i

		if i < right {
			if lengths[mirror] < right-i {
				lengths[i] = lengths[mirror]
			} else {
				lengths[i] = right - i
			}
		}

		lengths[i] = findLongest2(s, i, lengths[i])

		if i+lengths[i] > right {
			center = i
			right = i + lengths[i]
		}

		if lengths[i] > lengths[maxIndex] {
			maxIndex = i
		}
	}

	start := maxIndex - lengths[maxIndex]
	end := maxIndex + lengths[maxIndex]

	return removeHashes(s[start : end+1])
}

func insertHashes(s string) string {
	chars := []byte{}

	for i := range s {
		chars = append(chars, '#')
		chars = append(chars, s[i])
	}

	chars = append(chars, '#')

	return string(chars)
}

func removeHashes(s string) string {
	chars := []byte{}

	for i := range s {
		if s[i] != '#' {
			chars = append(chars, s[i])
		}
	}
	return string(chars)
}

func findLongest2(s string, i int, length int) int {
	start := i - length - 1
	end := i + length + 1

	for start >= 0 && end < len(s) && s[start] == s[end] {
		length++
		start--
		end++
	}
	return length
}
