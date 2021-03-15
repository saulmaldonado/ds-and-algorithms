package largestrectangleinhistogram

func largestRectangleArea(heights []int) int {
	n := len(heights)

	stack := []int{}

	max := 0

	for i := 0; i <= n; i++ {
		height := 0

		if i < n {
			height = heights[i]
		}

		if len(stack) == 0 || height >= heights[stack[len(stack)-1]] {
			stack = append(stack, i)
		} else {
			mid := stack[len(stack)-1]
			stack = stack[:len(stack)-1]

			length := i

			if len(stack) > 0 {
				length = (i - stack[len(stack)-1] - 1)
			}

			area := heights[mid] * length

			if area > max {
				max = area
			}

			i--
		}
	}
	return max
}
