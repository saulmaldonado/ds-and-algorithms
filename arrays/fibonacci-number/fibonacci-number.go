package fibonaccinumber

func fib(n int) int {
	if n == 0 {
		return 0
	}

	curr := 1
	first := 0
	second := 1

	for i := 2; i <= n; i++ {
		curr = first + second
		first = second
		second = curr
	}
	return curr
}
