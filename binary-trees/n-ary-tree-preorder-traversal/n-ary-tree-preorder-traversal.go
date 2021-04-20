package narytreepreordertraversal

type Node struct {
	Val      int
	Children []*Node
}

func preorder(root *Node) []int {
	list := new([]int)
	traverse(root, list)
	return *list
}

func traverse(root *Node, list *[]int) {
	if root == nil {
		return
	}

	*list = append(*list, root.Val)

	for _, node := range root.Children {
		traverse(node, list)
	}
}
