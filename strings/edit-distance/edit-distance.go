func minDistance(word1 string, word2 string) int {
	if len(word1) == 0 {
		return len(word2)
	} else if len(word2) == 0 {
		return len(word1)
	}

	n := len(word1) + 1
	m := len(word2) + 1

	dp := make([][]int, n)

	for i := range dp {
		dp[i] = make([]int, m)
	}

	for i := 1; i < m; i++ {
		dp[0][i] = dp[0][i-1] + 1
	}

	for i := 1; i < n; i++ {
		dp[i][0] = dp[i-1][0] + 1
	}

	for i := 1; i < n; i++ {
		for j := 1; j < m; j++ {
			if word1[i-1] == word2[j-1] {
				dp[i][j] = dp[i-1][j-1]
			} else {
				replace := dp[i-1][j-1]
				add := dp[i][j-1]
				del := dp[i-1][j]

				min := replace

				if add < min {
					min = add
				}

				if del < min {
					min = del
				}

				dp[i][j] = min + 1
			}
		}
	}
	return dp[n-1][m-1]
}
