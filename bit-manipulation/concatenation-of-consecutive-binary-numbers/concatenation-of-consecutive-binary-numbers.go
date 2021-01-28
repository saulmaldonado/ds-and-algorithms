package concatenationofconsecutivebinarynumbers

func concatenatedBinary(n int) int {
	mod := int(1e9 + 7)
	sum := 0
	count := 0
	for i := 1; i <= n; i++ {
		if (i-1)&i == 0 {
			count++
		}
		sum = (sum<<count + i) % mod
	}
	return sum
}
