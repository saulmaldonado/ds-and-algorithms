package maximalrectangle

func maximalRectangle(matrix [][]byte) int {
	if matrix == nil || len(matrix) == 0 || len(matrix[0]) == 0 {
		return 0
	}
	h := len(matrix)
	l := len(matrix[0])

	heights := make([]int, l)

	max := 0

	for i := 0; i < h; i++ {
		stack := []int{}

		for j := 0; j <= l; j++ {
			height := 0

			if j < l {
				if matrix[i][j] == '1' {
					heights[j]++
				} else {
					heights[j] = 0
				}
				height = heights[j]
			}

			if len(stack) == 0 || height >= heights[stack[len(stack)-1]] {
				stack = append(stack, j)
			} else {
				for len(stack) != 0 && height < heights[stack[len(stack)-1]] {
					mid := stack[len(stack)-1]
					stack = stack[:len(stack)-1]
					var l int
					if len(stack) == 0 {
						l = j
					} else {
						l = (j - stack[len(stack)-1] - 1)
					}
					area := (heights[mid] * l)

					if area > max {
						max = area
					}
				}
				stack = append(stack, j)
			}
		}
	}
	return max
}
