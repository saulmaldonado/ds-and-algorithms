package binarytreerightsideview

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func rightSideView(root *TreeNode) []int {
	list := []int{}
	traverse(root, 0, &list)
	return list
}

func traverse(root *TreeNode, level int, list *[]int) {
	if root == nil {
		return
	}

	if len(*list) == level {
		*list = append(*list, root.Val)
	}

	traverse(root.Right, level+1, list)
	traverse(root.Left, level+1, list)
}
