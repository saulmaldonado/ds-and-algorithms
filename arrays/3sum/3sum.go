package threesum

import "sort"

func threeSum(nums []int) [][]int {
	sort.Ints(nums)

	n := len(nums)

	ans := [][]int{}

	for i := 0; i < n-2; i++ {
		a := i + 1
		b := n - 1
		target := -nums[i]

		if target < 0 {
			break
		}

		if i > 0 && nums[i-1] == nums[i] {
			continue
		}

		for a < b {
			sum := nums[a] + nums[b]

			if sum == target {
				triplet := []int{-target, nums[a], nums[b]}
				ans = append(ans, triplet)

				a++

				for a < b && nums[a-1] == nums[a] {
					a++
				}

				b--

				for a < b && nums[b+1] == nums[b] {
					b++
				}
			} else if sum > target {
				b--
			} else {
				a++
			}
		}
	}

	return ans

}
