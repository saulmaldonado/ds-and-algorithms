package mergetwosortedlists

// ListNode is a node for a Linked List
type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	i := l1
	j := l2

	dummyNode := &ListNode{}
	currentNode := dummyNode

	for i != nil && j != nil {
		iVal := i.Val
		jVal := j.Val

		if iVal <= jVal {
			currentNode.Next = i
			currentNode = currentNode.Next
			i = i.Next
		} else {
			currentNode.Next = j
			currentNode = currentNode.Next
			j = j.Next
		}
	}

	if i != nil {
		currentNode.Next = i
	} else {
		currentNode.Next = j
	}

	return dummyNode.Next
}
