package checkifastringcontainsallbinarycodesofsizek

func hasAllCodes(s string, k int) bool {
	if len(s) < k || len(s)-k+1 < (1<<k) {
		return false
	}

	seen := make(map[string]bool)

	total := 1 << k

	n := len(s)

	start := 0
	end := start + k

	for end <= n {
		curr := s[start:end]

		if _, ok := seen[curr]; !ok {
			seen[curr] = true
		}

		if len(seen) == total {
			return true
		}

		start++
		end++
	}
	return false
}
