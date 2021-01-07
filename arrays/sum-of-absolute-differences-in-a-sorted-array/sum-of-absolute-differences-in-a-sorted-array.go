package sumofabsolutedifferencesinasortedarray

// Brute Force:
// time: O(n^2)
// space: O(n)
func getSumAbsoluteDifferences(nums []int) []int {
	n := len(nums)

	res := make([]int, n)

	for i := range nums {
		sum := 0
		for j := range nums {

			diff := nums[i] - nums[j]

			if diff < 0 {
				diff = -diff
			}

			sum += diff
		}

		res[i] = sum
	}

	return res
}

// Optimized Time
// time: O(n)
// space: O(n)
func getSumAbsoluteDifferences(nums []int) []int {
	n := len(nums)

	res := make([]int, n)

	rightSum := 0
	leftSum := 0

	for i := range nums {
		rightSum += nums[i]
	}

	for i := range nums {
		currentN := nums[i]

		res[i] = (i*currentN - leftSum) + (rightSum - (n-i)*currentN)

		rightSum -= currentN
		leftSum += currentN
	}

	return res
}

// Optimized Space and Time
// time: O(n)
// space: O(1)

// Note: Impl. mutates the original input array.
// Technically not correct since problem asks to return a new `result` array.
func getSumAbsoluteDifferences(nums []int) []int {
	n := len(nums)

	rightSum := 0
	leftSum := 0

	for i := range nums {
		rightSum += nums[i]
	}

	for i := range nums {
		currentN := nums[i]

		nums[i] = (i*currentN - leftSum) + (rightSum - (n-i)*currentN)

		rightSum -= currentN
		leftSum += currentN
	}

	return nums
}
