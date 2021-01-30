package verticalordertraversalofabinarytree

import (
	"container/heap"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type Point struct {
	Node *TreeNode
	x    int
	y    int
}

type PriorityQueue []*Point

func (pq PriorityQueue) Len() int {
	return len(pq)
}

func (pq PriorityQueue) Less(i, j int) bool {
	if pq[i].x != pq[j].x {
		return pq[i].x < pq[j].x
	}

	if pq[i].y != pq[j].y {
		return pq[i].y > pq[j].y
	}

	return pq[i].Node.Val < pq[i].Node.Val
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQueue) Push(x interface{}) {
	item := x.(*Point)
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
	n := len(*pq)
	item := (*pq)[n-1]
	(*pq)[n-1] = nil
	*pq = (*pq)[:n-1]
	return item
}

func verticalTraversal(root *TreeNode) [][]int {
	res := [][]int{}

	queue := make(PriorityQueue, 0)

	traverse(root, 0, 0, &queue)

	var prev *Point = nil

	list := []int{}

	for len(queue) > 0 {
		p := heap.Pop(&queue).(*Point)

		if prev == nil || p.x != prev.x {
			if prev != nil {
				res = append(res, list)
			}
			list = []int{}
		}
		list = append(list, p.Node.Val)
		prev = p
	}
	res = append(res, list)
	return res
}

func traverse(root *TreeNode, x int, y int, queue *PriorityQueue) {
	if root != nil {
		heap.Push(queue, &Point{Node: root, x: x, y: y})
		traverse(root.Left, x-1, y-1, queue)
		traverse(root.Right, x+1, y-1, queue)
	}
}
