package findfirstandlastpositionofelementinsortedarray

func searchRange(nums []int, target int) []int {
	left := 0
	right := len(nums) - 1

	ans := []int{-1, -1}

	for left <= right {
		mid := left + (right-left)/2

		if nums[mid] > target || nums[mid] == target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	if left == len(nums) || nums[left] != target {
		return ans
	}

	ans[0] = left

	right = len(nums) - 1

	for left <= right {
		mid := left + (right-left)/2

		if nums[mid] > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	ans[1] = right

	return ans
}
