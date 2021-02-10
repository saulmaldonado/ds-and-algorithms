package copylistwithrandompointer

type Node struct {
	Val    int
	Next   *Node
	Random *Node
}

func copyRandomList(head *Node) *Node {
	if head == nil {
		return nil
	}

	curr := head

	for curr != nil {
		temp := curr.Next
		curr.Next = &Node{Val: curr.Val, Next: temp, Random: nil}
		curr = temp
	}

	curr = head

	for curr != nil {
		if curr.Random != nil {
			curr.Next.Random = curr.Random.Next
		}
		curr = curr.Next.Next
	}

	curr = head
	headCopy := head.Next

	for curr != nil {
		next := curr.Next.Next
		c := curr.Next
		curr.Next = next

		if next != nil {
			c.Next = next.Next
		}

		curr = next
	}

	return headCopy
}
