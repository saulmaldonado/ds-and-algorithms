package subsets

func subsets(nums []int) [][]int {
	list := []int{}
	ans := [][]int{}

	traverse(&list, &ans, 0, nums)

	return ans
}

func traverse(list *[]int, ans *[][]int, start int, nums []int) {
	temp := make([]int, len(*list))
	copy(temp, *list)
	*ans = append(*ans, temp)

	for i := start; i < len(nums); i++ {
		*list = append(*list, nums[i])
		traverse(list, ans, i+1, nums)
		*list = (*list)[:len(*list)-1]
	}

}
