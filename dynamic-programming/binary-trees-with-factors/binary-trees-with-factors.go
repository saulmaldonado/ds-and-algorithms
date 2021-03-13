package binarytreeswithfactors

import "sort"

func numFactoredBinaryTrees(arr []int) int {
	n := len(arr)

	if n == 1 {
		return 1
	}

	sort.Ints(arr)

	mod := 1000000007

	mp := make(map[int]int)

	for i := range arr {
		mp[arr[i]] = i
	}

	dp := make([]int, n)

	dp[0] = 1

	for i := 1; i < n; i++ {
		count := 1

		for j := 0; j < i; j++ {
			if _, ok := mp[arr[i]/arr[j]]; arr[i]%arr[j] == 0 && ok {
				count += (dp[j] * dp[mp[arr[i]/arr[j]]])
			}
		}
		dp[i] = count
	}

	sum := 0

	for _, num := range dp {
		sum += num
	}

	return int(sum % mod)

}
