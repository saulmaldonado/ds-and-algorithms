package searcha2dmatrix

func searchMatrix(matrix [][]int, target int) bool {
	n := len(matrix)
	m := len(matrix[0])

	i := 0
	j := m - 1

	for i < n && j >= 0 {
		if matrix[i][j] == target {
			return true
		}

		if matrix[i][j] > target {
			j--
		} else {
			i++
		}
	}
	return true
}

func searchMatrix2(matrix [][]int, target int) bool {
	n := len(matrix)
	m := len(matrix[0])

	left := 0
	right := (n * m) - 1

	for left <= right {
		mid := left + (right-left)/2
		midCell := matrix[mid/m][mid%m]

		if midCell == target {
			return true
		}

		if midCell > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return false
}
