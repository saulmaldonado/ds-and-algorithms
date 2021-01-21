package uniquepaths

func uniquePaths(m int, n int) int {
	dp := make([][]int, n)

	for i := 0; i < m; i++ {
		dp[0] = append(dp[0], 1)
	}

	for i := 1; i < n; i++ {
		dp[i] = append(dp[i], 1)
	}

	for i := 1; i < n; i++ {
		for j := 1; j < m; j++ {
			top := dp[i-1][j]
			left := dp[i][j-1]

			dp[i] = append(dp[i], top+left)
		}
	}

	return dp[n-1][m-1]
}
