package smalleststringwithagivennumericvalue

func getSmallestString(n int, k int) string {
	chars := make([]byte, n)

	for i := n; i >= 1; i-- {
		x := k - (n - 1)
		if 26 < x {
			x = 26
		}

		k -= x
		n--

		chars[i-1] = byte(x - 1 + 'a')
	}
	return string(chars)
}
