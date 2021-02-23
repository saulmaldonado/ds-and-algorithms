package addbinary

func addBinary(a string, b string) string {
	n := len(a)
	m := len(b)

	i := n - 1
	j := m - 1

	carry := 0
	chars := []byte{}

	for i >= 0 || j >= 0 {
		sum := carry

		if i >= 0 {
			sum += int(a[i] - '0')
			i--
		}

		if j >= 0 {
			sum += int(b[j] - '0')
			j--
		}

		chars = append(chars, byte((sum&1)+'0'))

		if sum > 1 {
			carry = 1
		} else {
			carry = 0
		}

	}

	if carry == 1 {
		chars = append(chars, byte(1+'0'))
	}

	for i := 0; i < len(chars)/2; i++ {
		temp := chars[i]
		chars[i] = chars[len(chars)-i-1]
		chars[len(chars)-i-1] = temp
	}

	return string(chars)

}
