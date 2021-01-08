package cherrypickupii

func cherryPickup(grid [][]int) int {
	dp := make([][][]int, len(grid))

	// create 3d array
	for i := range dp {
		dp[i] = make([][]int, len(grid[0]))
		for j := range dp[i] {
			dp[i][j] = make([]int, len(grid[0]))
		}
	}

	return traverse(grid, dp, 0, 0, len(grid[0])-1)
}

func traverse(grid [][]int, dp [][][]int, h int, i int, j int) int {
	dirs := [3]int{-1, 0, 1}
	cherries := grid[h][i]

	if j != i {
		cherries += grid[h][j]
	}

	if h == len(grid)-1 {
		dp[h][i][j] = cherries
		return cherries
	}

	if dp[h][i][j] > 0 {
		return dp[h][i][j]
	}

	max := 0

	for _, dir1 := range dirs {
		rob1 := i + dir1
		for _, dir2 := range dirs {
			rob2 := j + dir2

			if rob1 >= 0 && rob1 < len(grid[0]) && rob2 >= 0 && rob2 < len(grid[0]) {
				res := traverse(grid, dp, h+1, rob1, rob2)

				if res > max {
					max = res
				}
			}
		}
	}
	dp[h][i][j] = max + cherries
	return dp[h][i][j]
}
