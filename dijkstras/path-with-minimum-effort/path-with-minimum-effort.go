package pathwithminimumeffort

import (
	"container/heap"
	"math"
)

type Cell struct {
	i      int
	j      int
	effort int
}

type PriorityQueue []*Cell

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
	return pq[i].effort < pq[j].effort
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQueue) Push(x interface{}) {
	item := x.(*Cell)
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil
	*pq = old[0 : n-1]
	return item
}

func minimumEffortPath(heights [][]int) int {
	h := len(heights)
	w := len(heights[0])

	directions := [][]int{{0, -1}, {0, 1}, {-1, 0}, {1, 0}}

	efforts := make([][]int, h)

	for i := range efforts {
		efforts[i] = make([]int, w)
	}

	for i := range efforts {
		for j := range efforts[i] {
			efforts[i][j] = math.MaxInt32
		}
	}

	queue := make(PriorityQueue, 0)
	queue = append(queue, &Cell{i: 0, j: 0, effort: 0})

	visitied := make([][]bool, h)

	for i := range efforts {
		visitied[i] = make([]bool, w)
	}

	efforts[0][0] = 0

	i := 0
	j := 0

	for queue.Len() > 0 {
		next := heap.Pop(&queue).(*Cell)

		i = next.i
		j = next.j

		if visitied[i][j] {
			continue
		}

		if i == h-1 && j == w-1 {
			return next.effort
		}

		visitied[i][j] = true

		current := heights[i][j]
		currentEffort := efforts[i][j]

		for _, dir := range directions {
			newi := i + dir[0]
			newj := j + dir[1]

			if newi < 0 || newj < 0 || newi == h || newj == w {
				continue
			}

			diff := current - heights[newi][newj]

			if diff < 0 {
				diff = -diff
			}

			maxEffort := currentEffort
			if diff > maxEffort {
				maxEffort = diff
			}

			if maxEffort < efforts[newi][newj] {
				efforts[newi][newj] = maxEffort
				heap.Push(&queue, &Cell{i: newi, j: newj, effort: maxEffort})
			}
		}
	}

	return efforts[h-1][w-1]
}
