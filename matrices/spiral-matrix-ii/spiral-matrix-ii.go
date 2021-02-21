package spiralmatrixii

func generateMatrix(n int) [][]int {
	grid := make([][]int, n)

	for i := range grid {
		grid[i] = make([]int, n)
	}

	i := 0
	j := n - 1
	a := 0
	b := n - 1

	counter := 1

	for i <= j && a <= b {
		for col := i; col <= j; col++ {
			grid[a][col] = counter
			counter++
		}

		for row := a + 1; row <= b; row++ {
			grid[row][j] = counter
			counter++
		}

		if i < j || a < b {
			for col := j - 1; col >= i+1; col-- {
				grid[b][col] = counter
				counter++
			}

			for row := b; row > a; row-- {
				grid[row][i] = counter
				counter++
			}
		}
		i++
		j--
		a++
		b--
	}
	return grid
}
