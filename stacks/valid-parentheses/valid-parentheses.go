package validparentheses

func isValid(s string) bool {
	mp := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}

	stack := []rune{}

	for _, ch := range s {
		if len(stack) > 0 && stack[len(stack)-1] == mp[ch] {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, ch)
		}
	}

	return len(stack) == 0
}
