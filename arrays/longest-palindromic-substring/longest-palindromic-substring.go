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
