package countandsay

func countAndSay(n int) string {
	str := "1"
	i := 1

	for i < n {
		str = say(str)
		i++
	}

	return str
}

func say(s string) string {
	chars := []byte{}
	curr := s[0]
	count := 1

	for i := 1; i < len(s); i++ {
		if s[i] != curr {
			chars = append(chars, byte(count+'0'))
			chars = append(chars, curr)
			curr = s[i]
			count = 1
		} else {
			count++
		}
	}
	chars = append(chars, byte(count+'0'))
	chars = append(chars, curr)

	return string(chars)
}
