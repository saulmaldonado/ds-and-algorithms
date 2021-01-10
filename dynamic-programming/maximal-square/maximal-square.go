func maximalSquare(matrix [][]byte) int {

	dp := make([][]int, len(matrix))

	for i := range matrix {
		dp[i] = make([]int, len(matrix[0]))
	}
	ans := 0

	for i := range matrix {
		for j := range matrix[0] {
			if matrix[i][j] == '1' {
				dp[i][j] = 1
				if i > 0 && j > 0 {
					if dp[i][j-1] <= dp[i-1][j-1] && dp[i][j-1] <= dp[i-1][j] {
						dp[i][j] += dp[i][j-1]
					} else if dp[i-1][j-1] <= dp[i][j-1] && dp[i-1][j-1] <= dp[i-1][j] {
						dp[i][j] += dp[i-1][j-1]
					} else {
						dp[i][j] += dp[i-1][j]
					}
				}
				if dp[i][j] > ans {
					ans = dp[i][j]
				}
			}
		}
	}
	return ans * ans
}
