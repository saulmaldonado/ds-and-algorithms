package maxnumberofksumpairs

import "sort"

func maxOperations(nums []int, k int) int {
	sort.Ints(nums)

	count := 0

	i := 0
	j := len(nums) - 1

	for i < j {
		sum := nums[i] + nums[j]

		if sum == k {
			count++
			i++
			j--
		} else if sum < k {
			i++
			for i < j && nums[i-1] == nums[i] {
				i++
			}
		} else {
			j--
			for i < j && nums[j+1] == nums[j] {
				j--
			}
		}
	}
	return count
}

func maxOperations2(nums []int, k int) int {
	mp := make(map[int]int)

	count := 0

	for _, num := range nums {
		mp[num]++
	}

	for num := range mp {
		if _, ok := mp[k-num]; ok {
			if k-num == num {
				count += mp[num] / 2
				mp[num] = 0
			} else {
				if mp[k-num] < mp[num] {
					count += mp[k-num]
				} else {
					count += mp[num]
				}

				mp[num] = 0
				mp[k-num] = 0
			}
		}
	}
	return count
}
