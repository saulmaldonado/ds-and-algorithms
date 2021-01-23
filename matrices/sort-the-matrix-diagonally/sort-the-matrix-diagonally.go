package sortthematrixdiagonally

import "sort"

func diagonalSort(mat [][]int) [][]int {
	m := len(mat)
	n := len(mat[0])

	for i := range mat {
		sortDiagonal(i, 0, mat, m, n)
	}

	for j := range mat[0] {
		sortDiagonal(0, j, mat, m, n)
	}

	return mat
}

func sortDiagonal(i int, j int, mat [][]int, m int, n int) {
	list := []int{}

	for i < m && j < n {
		list = append(list, mat[i][j])
		i++
		j++
	}

	sort.Ints(list)

	i--
	j--

	for i >= 0 && j >= 0 {
		newV := list[len(list)-1]

		list = list[:len(list)-1]

		mat[i][j] = newV

		i--
		j--
	}
}
