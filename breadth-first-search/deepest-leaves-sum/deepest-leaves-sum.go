package deepestleavessum

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func deepestLeavesSum(root *TreeNode) int {
	queue := []*TreeNode{}

	sum := 0

	queue = append(queue, root)

	for len(queue) > 0 {
		num := len(queue)

		sum = 0

		for num > 0 {
			curr := queue[0]
			queue = queue[1:]

			sum += curr.Val

			if curr.Left != nil {
				queue = append(queue, curr.Left)
			}

			if curr.Right != nil {
				queue = append(queue, curr.Right)
			}

			num--
		}
	}
	return sum
}
