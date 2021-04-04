package palindromicsubstrings

func countSubstrings(s string) int {
	ans := 0

	for i := range s {
		ans += countPalindromesAroundCenter(s, i, i)
		ans += countPalindromesAroundCenter(s, i, i+1)
	}

	return ans
}

func countPalindromesAroundCenter(str string, low int, high int) int {
	ans := 0

	for low >= 0 && high < len(str) {
		if str[low] != str[high] {
			break
		}

		low--
		high++

		ans++
	}

	return ans
}
