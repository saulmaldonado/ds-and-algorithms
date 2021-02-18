package spiralmatrix

func spiralOrder(matrix [][]int) []int {
	ans := []int{}

	n := len(matrix[0])
	m := len(matrix)

	i := 0
	j := n - 1
	a := 0
	b := m - 1

	for i <= j && a <= b {
		for col := i; col <= j; col++ {
			ans = append(ans, matrix[a][col])
		}

		for row := a + 1; row <= b; row++ {
			ans = append(ans, matrix[row][j])
		}

		if i < j && a < b {
			for col := j - 1; col > i; col-- {
				ans = append(ans, matrix[b][col])
			}

			for row := b; row > a; row-- {
				ans = append(ans, matrix[row][i])
			}
		}

		i++
		j--
		a++
		b--
	}
	return ans
}
