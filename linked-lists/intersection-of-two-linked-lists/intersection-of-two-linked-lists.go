package intersectionoftwolinkedlists

type ListNode struct {
	Val  int
	Next *ListNode
}

func getIntersectionNode(headA, headB *ListNode) *ListNode {
	if headA == nil || headB == nil {
		return nil
	}

	aPointer := headA
	bPointer := headB

	for aPointer != bPointer {
		aPointer = aPointer.Next
		bPointer = bPointer.Next

		if aPointer == bPointer {
			return aPointer
		}

		if aPointer == nil {
			aPointer = headB
		}

		if bPointer == nil {
			bPointer = headA
		}
	}

	return aPointer
}
