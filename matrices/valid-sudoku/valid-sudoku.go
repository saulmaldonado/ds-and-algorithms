package validsudoku

func isValidSudoku(board [][]byte) bool {
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[0]); j++ {
			if board[i][j] == '.' {
				continue
			}
			res := validate(i, j, board)
			if !res {
				return res
			}
		}
	}
	return true
}

func validate(y int, x int, board [][]byte) bool {
	for i := 0; i < len(board); i++ {
		if i == y {
			continue
		}
		if board[i][x] == board[y][x] {
			return false
		}
	}

	for i := 0; i < len(board[0]); i++ {
		if x == i {
			continue
		}

		if board[y][i] == board[y][x] {
			return false
		}
	}

	a := (y / 3) * 3
	b := (x / 3) * 3

	for i := a; i < a+3; i++ {
		for j := b; j < b+3; j++ {
			if i == y && j == x {
				continue
			}
			if board[i][j] == board[y][x] {
				return false
			}
		}
	}

	return true
}
