package averageoflevelsinbinarytree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func averageOfLevels(root *TreeNode) []float64 {
	avg := []float64{}

	queue := []*TreeNode{}

	queue = append(queue, root)

	for len(queue) > 0 {
		n := len(queue)
		count := n
		sum := 0

		for count > 0 {
			curr := queue[0]
			queue = queue[1:]

			sum += curr.Val

			if curr.Left != nil {
				queue = append(queue, curr.Left)
			}

			if curr.Right != nil {
				queue = append(queue, curr.Right)
			}
			count--
		}
		avg = append(avg, float64(sum)/float64(n))
	}
	return avg
}
