func search(nums []int, target int) bool {
	left := 0
	right := len(nums) - 1
	for left < right && nums[left] == nums[right] {
		left++
	}

	for left < right {
		mid := left + (right-left)/2

		if nums[mid] > nums[right] {
			left = mid + 1
		} else {
			right = mid
		}
	}

	pivot := left

	left = 0
	right = len(nums) - 1

	if target >= nums[pivot] && target <= nums[right] {
		left = pivot
	} else {
		right = pivot
	}

	for left <= right {
		mid := left + (right-left)/2

		if nums[mid] == target {
			return true
		}

		if nums[mid] > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return false
}
