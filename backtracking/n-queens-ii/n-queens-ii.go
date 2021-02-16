package qqueens

var count = 0

func solveNQueens(n int) int {
	grid := make([][]byte, n)

	for i := 0; i < n; i++ {
		temp := make([]byte, n)
		for j := 0; j < n; j++ {
			temp[j] = '.'
		}
		grid[i] = temp
	}

	place(&grid, 0, n)

	return count
}

func place(grid *[][]byte, row int, n int) {
	if row == n {
		count++
	} else {
		for col := 0; col < n; col++ {
			if isValid(grid, row, col, n) {
				(*grid)[row][col] = 'Q'
				place(grid, row+1, n)
				(*grid)[row][col] = '.'
			}
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
