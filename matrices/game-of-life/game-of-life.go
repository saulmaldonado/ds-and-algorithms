package gameoflife

func gameOfLife(board [][]int) {
	l := len(board[0])
	h := len(board)

	res := make([][]int, h)

	for i := range res {
		res[i] = make([]int, l)
	}

	dir := [][]int{
		{0, -1},
		{0, 1},
		{1, 0},
		{-1, 0},
		{-1, -1},
		{-1, 1},
		{1, -1},
		{1, 1},
	}

	for i := range board {
		for j := range board[i] {
			liveCells := 0
			for _, d := range dir {
				x := j + d[1]
				y := i + d[0]

				if x >= 0 && x < l && y >= 0 && y < h {
					if board[y][x] == 1 {
						liveCells++
					}
				}
			}

			if liveCells < 2 {
				res[i][j] = 0
			} else {
				if liveCells > 3 {
					res[i][j] = 0
				} else if liveCells == 3 {
					res[i][j] = 1
				} else if board[i][j] == 1 {
					res[i][j] = 1
				}
			}
		}
	}

	for i := range res {
		for j := range res[i] {
			board[i][j] = res[i][j]
		}
	}
}
