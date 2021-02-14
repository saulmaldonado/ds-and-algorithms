package containerwithmostwater

func maxArea(height []int) int {
	i := 0
	j := len(height) - 1
	max := 0

	for i < j {
		if height[i] < height[j] {
			vol := (j - i) * height[i]

			if vol > max {
				max = vol
			}
			i++
		} else {
			vol := (j - i) * height[i]

			if vol > max {
				max = vol
			}
			j--
		}
	}
	return max
}
