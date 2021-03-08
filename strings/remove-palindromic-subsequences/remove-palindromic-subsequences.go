package removepalindromicsubsequences

func removePalindromeSub(s string) int {
	if len(s) == 0 {
		return 0
	}

	left := 0
	right := len(s) - 1

	for left < right {
		if s[left] != s[right] {
			return 2
		}
		left++
		right--
	}

	return 1

}
