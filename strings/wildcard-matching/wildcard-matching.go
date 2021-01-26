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
