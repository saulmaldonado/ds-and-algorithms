func minPathSum(grid [][]int) int {
	h := len(grid)
	w := len(grid[0])

	dp := make([][]int, len(grid))

	for i := range dp {
		dp[i] = make([]int, len(grid[0]))
	}

	dp[0][0] = grid[0][0]

	for i := 1; i < w; i++ {
		dp[0][i] = dp[0][i-1] + grid[0][i]
	}

	for i := 1; i < h; i++ {
		dp[i][0] = dp[i-1][0] + grid[i][0]
	}

	for i := 1; i < h; i++ {
		for j := 1; j < w; j++ {
			fromTop := dp[i-1][j] + grid[i][j]
			fromLeft := dp[i][j-1] + grid[i][j]

			if fromTop < fromLeft {
				dp[i][j] = fromTop
			} else {
				dp[i][j] = fromLeft
			}
		}
	}

	return dp[h-1][w-1]

}
