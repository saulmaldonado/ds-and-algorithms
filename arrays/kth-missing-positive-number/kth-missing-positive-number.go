package kthmissingpositivenumber

// O(log n)
func findKthPositive(arr []int, k int) int {
	left := 0
	right := len(arr) - 1

	for left <= right {
		mid := left + (right-left)/2

		if arr[mid]-mid-1 >= k {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return left + k

}

// O(n)
func findKthPositive(arr []int, k int) int {
	i := 0
	for ; i < len(arr); i++ {
		if arr[i]-i-1 >= k {
			return i + k
		}
	}
	return i + k
}
