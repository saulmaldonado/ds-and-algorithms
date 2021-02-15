package qqueens

func solveNQueens(n int) [][]string {
	grid := make([][]byte, n)

	for i := 0; i < n; i++ {
		temp := make([]byte, n)
		for j := 0; j < n; j++ {
			temp[j] = '.'
		}
		grid[i] = temp
	}

	res := [][]string{}

	place(&res, &grid, 0, n)

	return res

}

func place(res *[][]string, grid *[][]byte, row int, n int) {
	if row == n {
		list := []string{}

		for i := 0; i < n; i++ {
			list = append(list, string((*grid)[i]))
		}

		c := make([]string, n)
		copy(c, list)
		*res = append(*res, c)
	}

	for col := 0; col < n; col++ {
		if isValid(grid, row, col, n) {
			(*grid)[row][col] = 'Q'
			place(res, grid, row+1, n)
			(*grid)[row][col] = '.'
		}
	}
}

func isValid(grid *[][]byte, row int, col int, n int) bool {
	for i := 0; i < row; i++ {
		if (*grid)[i][col] == 'Q' {
			return false
		}
	}

	for i, j := row-1, col-1; i >= 0 && j >= 0; i, j = i-1, j-1 {
		if (*grid)[i][j] == 'Q' {
			return false
		}
	}

	for i, j := row-1, col+1; i >= 0 && j < n; i, j = i-1, j+1 {
		if (*grid)[i][j] == 'Q' {
			return false
		}
	}
	return true
}
