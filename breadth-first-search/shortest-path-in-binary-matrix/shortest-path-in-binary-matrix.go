package shortestpathinbinarymatrix

func shortestPathBinaryMatrix(grid [][]int) int {
	directions := [][]int{
		{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1},
		{1, 1},
	}

	n := len(grid)

	if grid[0][0] == 1 || grid[n-1][n-1] == 1 {
		return -1
	}

	queue := [][]int{}

	queue = append(queue, []int{0, 0})

	level := 1

	for len(queue) > 0 {
		curr := len(queue)

		for curr > 0 {
			pos := queue[0]
			queue = queue[1:len(queue)]
			curr--

			i := pos[0]
			j := pos[1]

			if i == n-1 && j == n-1 {
				return level
			}

			for _, dir := range directions {
				newI := i + dir[0]
				newJ := j + dir[1]

				if newI >= 0 && newI < n && newJ >= 0 && newJ < n && grid[newI][newJ] == 0 {
					queue = append(queue, []int{newI, newJ})
					grid[newI][newJ] = 1
				}
			}
		}
		level++
	}
	return -1
}
