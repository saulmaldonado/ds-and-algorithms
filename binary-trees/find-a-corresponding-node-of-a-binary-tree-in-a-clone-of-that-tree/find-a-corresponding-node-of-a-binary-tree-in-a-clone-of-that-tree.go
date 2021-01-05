package findacorrespondingnodeofabinarytreeinacloneofthattree

// TreeNode is node for binary tree
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findACorrespondingNodeOfABinaryTreeInacloneOfThatTree(original *TreeNode, cloned *TreeNode, target *TreeNode) *TreeNode {
	return dfs(cloned, target)
}

func dfs(root *TreeNode, target *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	if root.Val == target.Val {
		return root
	}

	left := dfs(root.Left, target)
	if left != nil {
		return left
	}

	right := dfs(root.Right, target)
	if right != nil {
		return right
	}

	return nil
}
