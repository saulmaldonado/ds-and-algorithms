package mergesortedarray

func merge(nums1 []int, m int, nums2 []int, n int) {
	n--
	m--
	i := len(nums1) - 1

	for n >= 0 && m >= 0 {
		if nums2[n] > nums1[m] {
			nums1[i] = nums2[n]
			n--
		} else {
			nums1[i] = nums1[m]
			m--
		}
		i--
	}

	for n >= 0 {
		nums1[i] = nums2[n]
		i--
		n--
	}
}
