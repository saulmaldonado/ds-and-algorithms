package uniquepathsii

func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	m := len(obstacleGrid)
	n := len(obstacleGrid[0])

	if obstacleGrid[0][0] == 1 || obstacleGrid[m-1][n-1] == 1 {
		return 0
	}

	dp := make([][]int, m)

	for i := range dp {
		dp[i] = make([]int, n)
	}

	dp[0][0] = 1

	for i := 1; i < n; i++ {
		if obstacleGrid[0][i-1] == 0 {
			dp[0][i] = dp[0][i-1]
		}
	}

	for i := 1; i < m; i++ {
		if obstacleGrid[i-1][0] == 0 {
			dp[i][0] = dp[i-1][0]
		}
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			if obstacleGrid[i-1][j] == 0 {
				dp[i][j] += dp[i-1][j]
			}

			if obstacleGrid[i][j-1] == 0 {
				dp[i][j] += dp[i][j-1]
			}
		}
	}

	return dp[m-1][n-1]
}
