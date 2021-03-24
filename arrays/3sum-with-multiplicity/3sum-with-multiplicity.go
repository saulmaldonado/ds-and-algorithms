package threesumwithmultiplicity

import "sort"

func threeSumMulti(arr []int, target int) int {
	if arr == nil || len(arr) < 3 {
		return 0
	}

	MOD := int(1e9 + 7)

	n := len(arr)

	sort.Ints(arr)
	count := 0

	for i := 0; i < n-2; i++ {
		left := i + 1
		right := n - 1

		for left < right {
			sum := arr[i] + arr[left] + arr[right]

			if sum > target {
				right--
			} else if sum < target {
				left++
			} else if arr[left] == arr[right] {
				count += (right - left + 1) * (right - left) / 2
				count %= MOD
				break
			} else {
				leftCount := 1
				rightCount := 1

				for left+1 < right && arr[left] == arr[left+1] {
					leftCount++
					left++
				}

				for right-1 > left && arr[right] == arr[right-1] {
					rightCount++
					right--
				}

				count += leftCount * rightCount
				count %= MOD
				left++
				right--
			}
		}
	}
	return count
}
