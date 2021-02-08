package shortestdistancetoacharacter

func shortestToChar(s string, c byte) []int {
	n := len(s)
	res := make([]int, n)
	prev := -n

	for i := 0; i < n; i++ {
		if s[i] == c {
			prev = i
		}

		res[i] = i - prev
	}

	for i := prev - 1; i >= 0; i-- {
		if s[i] == c {
			prev = i
		}
		if prev-i < res[i] {
			res[i] = prev - i
		}
	}

	return res
}
