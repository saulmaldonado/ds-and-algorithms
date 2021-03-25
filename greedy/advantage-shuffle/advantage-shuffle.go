package advantageshuffle

import "sort"

func advantageCount(A []int, B []int) []int {
	sort.Ints(A)
	n := len(A)

	pq := make([]int, n)
	for i := range B {
		pq[i] = i
	}

	sort.Slice(pq, func(i, j int) bool {
		return B[pq[i]] > B[pq[j]]
	})

	res := make([]int, n)

	low, high := 0, n-1

	for i := range pq {
		index, value := pq[i], B[pq[i]]

		if A[high] > value {
			res[index] = A[high]
			high--
		} else {
			res[index] = A[low]
			low++
		}
	}
	return res
}
