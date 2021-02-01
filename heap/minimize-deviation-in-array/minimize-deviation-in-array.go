package minimizedeviationinarray

import (
	"container/heap"
	"math"
)

type PriorityQueue []int

func (pq PriorityQueue) Len() int {
	return len(pq)
}

func (pq PriorityQueue) Less(i, j int) bool {
	return pq[i] > pq[j]
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQueue) Push(x interface{}) {
	*pq = append(*pq, x.(int))
}

func (pq *PriorityQueue) Pop() interface{} {
	item := (*pq)[len(*pq)-1]
	*pq = (*pq)[0 : len(*pq)-1]
	return item
}

func minimumDeviation(nums []int) int {
	min := math.MaxInt32
	res := math.MaxInt32

	pq := PriorityQueue{}

	for i := 0; i < len(nums); i++ {
		if nums[i]%2 == 1 {
			nums[i] *= 2
		}
		if nums[i] < min {
			min = nums[i]
		}
	}

	for i := 0; i < len(nums); i++ {
		for nums[i]%2 == 0 && nums[i] >= min*2 {
			nums[i] /= 2
		}
		heap.Push(&pq, nums[i])
	}

	for true {
		n := heap.Pop(&pq).(int)

		if (n - min) < res {
			res = n - min
		}

		if n%2 == 1 {
			break
		}

		if n/2 < min {
			min = n / 2
		}
		n /= 2
		heap.Push(&pq, n)
	}

	return res

}
