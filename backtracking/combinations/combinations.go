package combinations

func combine(n int, k int) [][]int {
	res := [][]int{}
	comb := []int{}
	build(&res, &comb, 1, n, k)
	return res
}

func build(res *[][]int, comb *[]int, start int, n int, k int) {
	if k == 0 {
		temp := make([]int, len(*comb))
		copy(temp, *comb)
		*res = append(*res, temp)
		return
	}

	for i := start; i <= n-k+1; i++ {
		*comb = append(*comb, i)
		build(res, comb, i+1, n, k-1)
		*comb = (*comb)[:len(*comb)-1]
	}
}
