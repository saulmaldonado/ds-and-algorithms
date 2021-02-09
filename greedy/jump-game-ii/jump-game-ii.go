package jumpgameii

func jump(nums []int) int {
	n := len(nums)

	jumps := 0
	right := 0
	max := 0

	for i := 0; i < n-1; i++ {

		if i+nums[i] > max {
			max = i + nums[i]
		}

		if right == i {
			right = max
			jumps++
		}
	}

	return jumps

}
