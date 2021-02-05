package reversenodesinkgroup

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseKGroup(head *ListNode, k int) *ListNode {
	dummy := ListNode{}
	prev := &dummy

	next := head

	for next != nil {
		tail := next

		i := 0

		for next != nil && i < k {
			next = next.Next
			i++
		}

		if i < k {
			prev.Next = tail
			break
		}

		prev.Next = reverse(tail, k)
		prev = tail
	}

	return dummy.Next
}

func reverse(head *ListNode, k int) *ListNode {
	var prev *ListNode
	var next *ListNode
	curr := head

	for curr != nil && k > 0 {
		next = curr.Next
		curr.Next = prev
		prev = curr
		curr = next
		k--
	}

	head = prev
	return head
}
