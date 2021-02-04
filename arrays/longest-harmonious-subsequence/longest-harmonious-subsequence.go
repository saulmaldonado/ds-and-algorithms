func findLHS(nums []int) int {
	freq := map[int]int{}
	max := 0

	for _, n := range nums {
		if _, ok := freq[n]; !ok {
			freq[n] = 0
		}

		freq[n]++

		if num, ok := freq[n+1]; ok {
			if num+freq[n] > max {
				max = num + freq[n]
			}
		}

		if num, ok := freq[n-1]; ok {
			if num+freq[n] > max {
				max = num + freq[n]
			}
		}
	}

	return max

}
