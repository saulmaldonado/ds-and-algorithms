package priorityqueue

import "errors"

type PriorityQueue struct {
	values []int
}

func (h *PriorityQueue) Size() int {
	return len(h.values)
}

func (h *PriorityQueue) Peek() (int, error) {
	if h.Size() == 0 {
		return -1, errors.New("queue is empty")
	}

	return h.values[0], nil
}

func (h *PriorityQueue) Pop() int {
	val := h.values[0]

	h.values[0] = h.values[len(h.values)-1]
	h.values = h.values[:len(h.values)-1]
	h.heapifyDown()

	return val
}

func (h *PriorityQueue) Add(num int) {
	h.values = append(h.values, num)
	h.heapifyUp()
}

func (h *PriorityQueue) heapifyUp() {

	i := len(h.values) - 1
	parentIndex := (i - 1) / 2

	for h.values[parentIndex] > h.values[i] {
		h.values[parentIndex], h.values[i] = h.values[i], h.values[parentIndex]
		i = (i - 1) / 2
		parentIndex = (i - 1) / 2
	}
}

func (h *PriorityQueue) heapifyDown() {
	i := 0
	l := len(h.values)

	for i*2+1 < l {
		leftChildIndex := i*2 + 1
		rightChildIndex := i*2 + 2
		smallerChildIndex := leftChildIndex

		if rightChildIndex < l && h.values[rightChildIndex] < h.values[leftChildIndex] {
			smallerChildIndex = rightChildIndex
		}

		if h.values[i] < h.values[smallerChildIndex] {
			break
		}

		h.values[i], h.values[smallerChildIndex] = h.values[smallerChildIndex], h.values[i]

		i = smallerChildIndex
	}
}
