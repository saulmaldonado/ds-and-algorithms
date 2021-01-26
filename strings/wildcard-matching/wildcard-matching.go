package wildcardmatching

func isMatch(s string, p string) bool {
	if s == p || s == "*" {
		return true
	}

	S := len(s) + 1
	P := len(p) + 1

	dp := make([][]bool, S)

	for i := range dp {
		dp[i] = make([]bool, P)
	}

	dp[0][0] = true

	for i := 1; i < P; i++ {
		dp[0][i] = p[i-1] == '*' && dp[0][i-1]
	}

	for i := 1; i < S; i++ {
		for j := 1; j < P; j++ {
			startP := j - 1
			startS := i - 1

			if p[startP] == '*' {
				dp[i][j] = dp[i-1][j] || dp[i][j-1]
			} else if s[startS] == p[startP] || p[startP] == '?' {
				dp[i][j] = dp[i-1][j-1]
			}
		}
	}

	return dp[S-1][P-1]
}

func isMatch2(s string, p string) bool {
	i := 0
	j := 0
	prevI := 0
	prevJ := -1

	for i < len(s) {
		if j < len(p) && (p[j] == '?' || s[i] == p[j]) {
			i++
			j++
		} else if j < len(p) && p[j] == '*' {
			prevJ = j
			prevI = i
			j++
		} else if prevJ != -1 {
			prevI++
			i = prevI

			j = prevJ + 1
		} else {
			return false
		}
	}

	for j < len(p) && p[j] == '*' {
		j++
	}

	return j == len(p)
}
