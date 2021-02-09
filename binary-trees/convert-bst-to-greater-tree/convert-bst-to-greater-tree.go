package convertbsttogreatertree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func convertBST(root *TreeNode) *TreeNode {
	traverse(root, 0)
	return root
}

func traverse(root *TreeNode, sum int) int {
	if root == nil {
		return sum
	}

	sum = traverse(root.Right, sum)
	sum += root.Val
	root.Val = sum
	sum = traverse(root.Left, sum)
	return sum
}
