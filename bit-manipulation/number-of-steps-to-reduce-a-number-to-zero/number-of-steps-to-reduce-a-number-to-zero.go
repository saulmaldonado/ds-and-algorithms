func numberOfSteps(num int) int {
	if num == 0 {
		return 0
	}

	count := 0

	for num > 0 {
		if (num & 1) == 1 {
			count += 2
		} else {
			count++
		}
		num >>= 1
	}
	return count - 1
}
