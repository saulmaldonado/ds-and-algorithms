package pacificatlanticwaterflow

var directions [][]int = [][]int{{0, 1}, {1, 0}, {-1, 0}, {0, -1}}
var n int
var m int

func pacificAtlantic(matrix [][]int) [][]int {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return [][]int{}
	}

	res := [][]int{}

	n = len(matrix)
	m = len(matrix[0])

	pacificGrid := make([][]bool, n)
	for i := range pacificGrid {
		pacificGrid[i] = make([]bool, m)
	}

	atlanticGrid := make([][]bool, n)
	for i := range atlanticGrid {
		atlanticGrid[i] = make([]bool, m)
	}

	pacificQueue := [][]int{}
	atlanticQueue := [][]int{}

	for i := 0; i < n; i++ {
		pacificQueue = append(pacificQueue, []int{i, 0})
		atlanticQueue = append(atlanticQueue, []int{i, m - 1})
	}

	for i := 0; i < m; i++ {
		pacificQueue = append(pacificQueue, []int{0, i})
		atlanticQueue = append(atlanticQueue, []int{n - 1, i})
	}

	traverse(&pacificQueue, pacificGrid, matrix)
	traverse(&atlanticQueue, atlanticGrid, matrix)

	for i := range pacificGrid {
		for j := range pacificGrid[i] {
			if atlanticGrid[i][j] && pacificGrid[i][j] {
				cell := []int{i, j}
				res = append(res, cell)
			}
		}
	}
	return res
}

func traverse(queue *[][]int, reachable [][]bool, matrix [][]int) {
	for len(*queue) != 0 {
		curr := (*queue)[0]
		*queue = (*queue)[1:]

		row := curr[0]
		col := curr[1]

		reachable[row][col] = true

		for _, dir := range directions {
			newRow := curr[0] + dir[0]
			newCol := curr[1] + dir[1]

			if newRow < 0 || newRow >= n || newCol < 0 || newCol >= m {
				continue
			}

			if reachable[newRow][newCol] {
				continue
			}

			if matrix[row][col] > matrix[newRow][newCol] {
				continue
			}

			*queue = append(*queue, []int{newRow, newCol})
		}
	}
}
