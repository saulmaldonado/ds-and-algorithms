package trappingrainwater

func trap(height []int) int {
	dp := make([]int, len(height))

	ans := 0

	max1 := 0
	for i := 0; i < len(height); i++ {
		if max1 < height[i] {
			max1 = height[i]
		}
		dp[i] = max1
	}

	max2 := 0
	for i := len(height) - 1; i >= 0; i-- {
		if height[i] > max2 {
			max2 = height[i]
		}

		if max2 < dp[i] {
			dp[i] = max2
		}

		diff := 0

		if dp[i] > height[i] {
			diff = dp[i] - height[i]
		}

		ans += diff
	}
	return ans
}

func trap2(height []int) int {
	if len(height) < 3 {
		return 0
	}

	i := 0
	j := len(height) - 1

	iMax := 0
	jMax := 0

	ans := 0

	for i < j {
		if height[i] < height[j] {
			if height[i] > iMax {
				iMax = height[i]
			} else {
				diff := 0
				if iMax > height[i] {
					diff = iMax - height[i]
				}
				ans += diff
			}
			i++
		} else {
			if height[j] > jMax {
				jMax = height[j]
			} else {
				diff := 0
				if jMax > height[j] {
					diff = jMax - height[j]
				}
				ans += diff
			}
			j--
		}
	}
	return ans
}
