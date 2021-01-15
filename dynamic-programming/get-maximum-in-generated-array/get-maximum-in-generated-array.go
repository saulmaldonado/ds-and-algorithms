package getmaximumingeneratedarray

func getMaximumGenerated(n int) int {
	if n == 0 {
		return 0
	} else if n == 1 {
		return 1
	}

	nums := make([]int, n+1)

	i := 2

	nums[0] = 0
	nums[1] = 1

	max := 1

	for i <= n {
		if i%2 == 0 {
			nums[i] = nums[i/2]
			if nums[i] > max {
				max = nums[i]
			}
		} else {
			nums[i] = nums[(i+1)/2] + nums[i/2]
			if nums[i] > max {
				max = nums[i]
			}
		}
		i++
	}
	return max
}
