package beautifularrangementii

func constructArray(n int, k int) []int {
	res := make([]int, n)
	left := 1
	right := k + 1
	i := 0

	for left < right {
		res[i] = left
		left++
		i++

		res[i] = right
		right--
		i++
	}

	if left == right {
		res[i] = left
		i++
	}

	for j := k + 2; j <= n; j++ {
		res[i] = j
		i++
	}

	return res
}
