func getPermutation(n int, k int) string {
	nums := []int{}
	str := []byte{}

	fact := 1

	for i := 1; i <= n; i++ {
		fact *= i
		nums = append(nums, i)
	}

	k--

	for i := 0; i < n; i++ {
		fact /= (n - i)
		index := k / fact
		str = append(str, byte(nums[index]+'0'))
		nums = append(nums[:index], nums[index+1:]...)
		k -= index * fact
	}

	return string(str)
}
