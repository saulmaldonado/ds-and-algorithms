package setmatrixzeroes

func setZeroes(matrix [][]int) {
	n := len(matrix)
	m := len(matrix[0])

	zeroCol := false
	zeroRow := false

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			if matrix[i][j] == 0 {
				if i == 0 {
					zeroRow = true
				}

				if j == 0 {
					zeroCol = true
				}

				matrix[i][0] = 0
				matrix[0][j] = 0
			}
		}
	}

	for i := 1; i < n; i++ {
		for j := 1; j < m; j++ {
			if matrix[i][0] == 0 || matrix[0][j] == 0 {
				matrix[i][j] = 0
			}
		}
	}

	if zeroCol {
		for i := 0; i < n; i++ {
			matrix[i][0] = 0
		}
	}

	if zeroRow {
		for j := 0; j < m; j++ {
			matrix[0][j] = 0
		}
	}
}
