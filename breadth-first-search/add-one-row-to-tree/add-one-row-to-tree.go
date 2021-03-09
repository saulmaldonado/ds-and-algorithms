package addonerowtotree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func addOneRow(root *TreeNode, v int, d int) *TreeNode {
	if d == 1 {
		return &TreeNode{v, root, nil}
	}

	queue := []*TreeNode{}

	queue = append(queue, root)

	depth := 1

	for len(queue) > 0 {
		n := len(queue)
		for n > 0 {
			curr := queue[0]
			queue = queue[1:]

			if depth == d-1 {
				left := curr.Left
				right := curr.Right

				curr.Left = &TreeNode{v, left, nil}
				curr.Right = &TreeNode{v, nil, right}
			} else {
				if curr.Left != nil {
					queue = append(queue, curr.Left)
				}

				if curr.Right != nil {
					queue = append(queue, curr.Right)
				}
			}
			n--
		}
		depth++
	}
	return root
}
