func strStr(haystack string, needle string) int {
	n := len(haystack)
	m := len(needle)

	if m == 0 {
		return 0
	}

	kmp := genKmp(needle)

	i := 0
	j := 0

	for i < n {
		if haystack[i] == needle[j] {
			j++
			i++
		}

		if j == len(needle) {
			return i - j
		} else if i < n && haystack[i] != needle[j] {
			if j != 0 {
				j = kmp[j-1]
			} else {
				i++
			}
		}
	}
	return -1
}

func genKmp(needle string) []int {
	n := len(needle)
	kmp := make([]int, n)

	j := 0
	i := 1

	for i < n {
		if needle[i] == needle[j] {
			j++
			kmp[i] = j
			i++
		} else {
			if j != 0 {
				j = kmp[j-1]
			} else {
				kmp[i] = 0
				i++
			}
		}
	}
	return kmp
}
