package validnumber

func isNumber(s string) bool {
	i := 0
	n := len(s)

	for i < n && s[i] == ' ' {
		i++
	}

	if i == n {
		return false
	}

	if s[i] == '+' || s[i] == '-' {
		i++
	}

	if i == n {
		return false
	}

	digits := 0
	points := 0

	for i < n && ((s[i] >= '0' && s[i] <= '9') || s[i] == '.') {
		if s[i] == '.' {
			if points == 1 {
				return false
			}
			points++
		} else {
			digits++
		}
		i++
	}

	if digits < 1 {
		return false
	}

	if i < n && (s[i] == 'e' || s[i] == 'E') {
		i++

		if i == n {
			return false
		}

		if s[i] == '+' || s[i] == '-' {
			i++
		}

		if i == n {
			return false
		}

		for i < n && (s[i] >= '0' && s[i] <= '9') {
			i++
		}
	}

	return i == n
}
