package flipbinarytreetomatchpreordertraversal

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

var i int

func flipMatchVoyage(root *TreeNode, voyage []int) []int {
	i = 0
	list := new([]int)

	if dfs(root, voyage, list) {
		return *list
	}
	return []int{-1}
}

func dfs(node *TreeNode, voy []int, list *[]int) bool {
	if node == nil {
		return true
	}

	if node.Val != voy[i] {
		return false
	}

	i++

	if node.Left != nil && node.Left.Val != voy[i] {
		*list = append(*list, node.Val)
		return dfs(node.Right, voy, list) && dfs(node.Left, voy, list)
	}

	return dfs(node.Left, voy, list) && dfs(node.Right, voy, list)
}
