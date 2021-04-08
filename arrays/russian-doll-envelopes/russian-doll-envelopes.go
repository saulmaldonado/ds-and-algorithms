package russiandollenvelopes

import "sort"

func maxEnvelopes(envelopes [][]int) int {
	n := len(envelopes)

	sort.Slice(envelopes, func(i, j int) bool {
		if envelopes[i][0] == envelopes[j][0] {
			return envelopes[j][1] < envelopes[i][1]
		}
		return envelopes[i][0] < envelopes[j][0]
	})

	count := 0
	dp := make([]int, n)

	for _, envelope := range envelopes {
		i := binarySearch(dp, 0, count, envelope[1])

		dp[i] = envelope[1]

		if i == count {
			count++
		}
	}
	return count
}

func binarySearch(dp []int, start int, end int, envelope int) int {
	for start < end {
		mid := start + ((end - start) / 2)

		if dp[mid] == envelope {
			return mid
		}

		if dp[mid] < envelope {
			start = mid + 1
		} else {
			end = mid
		}
	}

	return start
}
