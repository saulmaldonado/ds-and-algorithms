package regularexpressionmatching

func isMatch(s string, p string) bool {
	S := len(s) + 1
	P := len(p) + 1

	dp := make([][]bool, S)

	for i := range dp {
		dp[i] = make([]bool, P)
	}

	dp[0][0] = true

	for i := 1; i < P; i++ {
		if p[i-1] == '*' {
			dp[0][i] = dp[0][i-2]
		}
	}

	for i := 1; i < S; i++ {
		for j := 1; j < P; j++ {
			if s[i-1] == p[j-1] || p[j-1] == '.' {
				dp[i][j] = dp[i-1][j-1]
			} else if p[j-1] == '*' {
				if p[j-2] != s[i-1] && p[j-2] != '.' {
					dp[i][j] = dp[i][j-2]
				} else {
					dp[i][j] = (dp[i][j-1] || dp[i-1][j] || dp[i][j-2])
				}
			}
		}
	}

	return dp[len(s)][len(p)]
}
