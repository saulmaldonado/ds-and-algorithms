package removeboxes

func removeBoxes(boxes []int) int {
	n := len(boxes)
	dp := make([][][]int, n)

	for i := range dp {
		dp[i] = make([][]int, n)
		for j := range dp[i] {
			dp[i][j] = make([]int, n)
		}
	}

	return remove(boxes, 0, n-1, 0, dp)
}

func remove(boxes []int, i int, j int, k int, dp [][][]int) int {
	if i > j {
		return 0
	}

	if i == j {
		return (k + 1) * (k + 1)
	}

	if dp[i][j][k] != 0 {
		return dp[i][j][k]
	}

	count := 0

	left := i

	for left <= j && boxes[left] == boxes[i] {
		left++
		count++
	}

	start := left

	res := (count+k)*(count+k) + remove(boxes, start, j, 0, dp)

	m := left

	for m <= j {
		if boxes[m] == boxes[i] && boxes[m-1] != boxes[i] {
			newRes := remove(boxes, start, m-1, 0, dp) + remove(boxes, m, j, count+k, dp)
			if newRes > res {
				res = newRes
			}
		}
		m++
	}

	dp[i][j][k] = res
	return res

}
