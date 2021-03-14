package swappingnodesinalinkedlist

type ListNode struct {
	Val  int
	Next *ListNode
}

func swapNodes(head *ListNode, k int) *ListNode {
	dummy := &ListNode{Val: 0, Next: head}

	beg := head
	slow := head
	fast := head

	begPrev := dummy
	slowPrev := dummy

	i := 0
	pos := k - 1

	for fast.Next != nil {
		if i < pos {
			beg = beg.Next
			begPrev = begPrev.Next
		} else {
			slow = slow.Next
			slowPrev = slowPrev.Next
		}
		fast = fast.Next
		i++
	}

	begPrev.Next = slow
	slowPrev.Next = beg

	temp := beg.Next
	beg.Next = slow.Next
	slow.Next = temp

	return dummy.Next
}
