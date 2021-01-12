package addtwonumbers

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	dummy := ListNode{}

	currentNode := &dummy

	carryOver := 0

	for l1 != nil || l2 != nil {
		sum := 0

		if l1 != nil {
			sum += l1.Val
		}

		if l2 != nil {
			sum += l2.Val
		}

		sum += carryOver

		carryOver = sum / 10

		sum %= 10

		currentNode.Next = &ListNode{Val: sum}

		currentNode = currentNode.Next

		if l1 != nil {
			l1 = l1.Next
		}

		if l2 != nil {
			l2 = l2.Next
		}
	}

	if carryOver > 0 {
		currentNode.Next = &ListNode{Val: carryOver}
	}

	return dummy.Next
}
