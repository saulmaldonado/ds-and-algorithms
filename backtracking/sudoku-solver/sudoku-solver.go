func solveSudoku(board [][]byte) {
	solve(0, 0, board)
}

func solve(i int, j int, board [][]byte) bool {
	if j == len(board[0]) {
		j = 0
		i++

		if i == len(board) {
			return true
		}
	}

	if board[i][j] != '.' {
		return solve(i, j+1, board)
	}

	for a := 1; a <= 9; a++ {
		curr := byte(a + '0') // converts int to correct ASCII value and casts to char

		if valid(i, j, curr, board) {
			board[i][j] = curr
			if solve(i, j+1, board) {
				return true
			}
			board[i][j] = '.'
		}
	}
	return false
}

func valid(i int, j int, curr byte, board [][]byte) bool {
	for a := 0; a < len(board); a++ {
		if curr == board[a][j] {
			return false
		}
	}

	for b := 0; b < len(board[0]); b++ {
		if curr == board[i][b] {
			return false
		}
	}

	subGridRow := i / 3 * 3
	subGridCol := j / 3 * 3

	for a := 0; a < 3; a++ {
		for b := 0; b < 3; b++ {
			if board[subGridRow+a][subGridCol+b] == curr {
				return false
			}
		}
	}
	return true
}
