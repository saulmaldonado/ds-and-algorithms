package validatestacksequences

func validateStackSequences(pushed []int, popped []int) bool {
	n := len(pushed)

	if n == 0 {
		return true
	}

	stack := []int{}
	i := 0

	for _, p := range pushed {
		stack = append(stack, p)

		for len(stack) != 0 && stack[len(stack)-1] == popped[i] {
			stack = stack[:len(stack)-1]
			i++
		}
	}
	return i == n
}
