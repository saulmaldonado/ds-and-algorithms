package medianoftwosortedarrays

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {

	if len(nums1) > len(nums2) {
		temp := nums1
		nums1 = nums2
		nums2 = temp
	}

	left := 0
	right := len(nums1)
	totalLength := len(nums1) + len(nums2)

	for left <= right {
		i := left + (right-left)/2
		j := (totalLength+1)/2 - i

		if i < right && nums2[j-1] > nums1[i] {
			left = i + 1
		} else if i > left && nums1[i-1] > nums2[j] {
			right = i - 1
		} else {
			maxLeft := 0

			if i == 0 {
				maxLeft = nums2[j-1]
			} else if j == 0 {
				maxLeft = nums1[i-1]
			} else {
				if nums1[i-1] > nums2[j-1] {
					maxLeft = nums1[i-1]
				} else {
					maxLeft = nums2[j-1]
				}
			}
			if totalLength%2 == 1 {
				return float64(maxLeft)
			}

			minRight := 0

			if i == len(nums1) {
				minRight = nums2[j]
			} else if j == len(nums2) {
				minRight = nums1[i]
			} else {
				if nums1[i] < nums2[j] {
					minRight = nums1[i]
				} else {
					minRight = nums2[j]
				}
			}

			return float64((maxLeft + minRight)) / 2.0
		}
	}
	return 0.0
}
