package romantointeger

func romanToInt(s string) int {
	mp := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	sum := 0

	for i := len(s) - 1; i >= 0; i-- {
		cur := mp[s[i]]
		sum += cur

		if i > 0 {
			next := mp[s[i-1]]

			if next < cur {
				sum -= next
				i--
			}
		}
	}
	return sum
}
