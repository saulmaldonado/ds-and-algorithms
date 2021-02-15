package zigzagconversion

func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}

	sbArr := make([][]byte, numRows)

	i := 0
	j := 0
	n := len(s)
	dir := -1

	for j < n {
		sbArr[i] = append(sbArr[i], s[j])

		if i == numRows-1 || i == 0 {
			dir = -dir
		}

		i += dir
		j++
	}

	main := ""

	for _, arr := range sbArr {
		str := string(arr)
		main += str
	}

	return main
}
