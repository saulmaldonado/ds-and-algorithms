package partitionlist

type ListNode struct {
	Val  int
	Next *ListNode
}

func partition(head *ListNode, x int) *ListNode {
	dummyOne := &ListNode{}
	dummyTwo := &ListNode{}

	currOne := dummyOne
	currTwo := dummyTwo

	curr := head

	for curr != nil {
		if curr.Val < x {
			currOne.Next = curr
			currOne = currOne.Next
		} else {
			currTwo.Next = curr
			currTwo = currTwo.Next
		}
		curr = curr.Next
	}
	currTwo.Next = nil
	currOne.Next = dummyTwo.Next

	return dummyOne.Next
}
