package mergeksortedlists

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeKLists(lists []*ListNode) *ListNode {
	if len(lists) == 0 {
		return nil
	}

	for len(lists) > 1 {
		a := lists[0]
		lists = lists[1:]
		b := lists[0]
		lists = lists[1:]

		h := merge(a, b)

		lists = append(lists, h)
	}

	return lists[0]
}

func merge(a *ListNode, b *ListNode) *ListNode {
	dummy := &ListNode{}
	currentNode := dummy
	for a != nil && b != nil {
		if a.Val < b.Val {
			currentNode.Next = a
			a = a.Next
		} else {
			currentNode.Next = b
			b = b.Next
		}
		currentNode = currentNode.Next
	}
	if a != nil {
		currentNode.Next = a
	}

	if b != nil {
		currentNode.Next = b
	}

	return dummy.Next
}
