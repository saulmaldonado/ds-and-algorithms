package textjustification

func fullJustify(words []string, maxWidth int) []string {
	res := []string{}

	n := len(words)

	left := 0

	for left < n {
		l := len(words[left])

		right := left + 1

		for right < n && (l+len(words[right])+right-left) <= maxWidth {
			l += len(words[right])
			right++
		}

		extra := maxWidth - l

		if right-left == 1 || right == n {
			// left justify
			res = append(res, leftJustify(words, left, right, extra))
		} else {
			// mid justify
			res = append(res, midJustify(words, left, right, extra))
		}

		left = right
	}

	return res
}

func leftJustify(words []string, left int, right int, extra int) string {
	rightSpaces := extra - (right - left - 1)

	chars := []byte{}

	chars = append(chars, words[left]...)

	for i := left + 1; i < right; i++ {
		chars = append(chars, (" " + words[i])...)
	}

	for i := 0; i < rightSpaces; i++ {
		chars = append(chars, ' ')
	}
	return string(chars)
}

func midJustify(words []string, left int, right int, extra int) string {
	boundaries := right - left - 1
	spaces := extra / boundaries
	extraSpaces := extra % boundaries

	chars := []byte{}

	chars = append(chars, words[left]...)

	for i := left + 1; i < right; i++ {
		spacesToApply := spaces

		if extraSpaces > 0 {
			spacesToApply++
			extraSpaces--
		}

		for j := 0; j < spacesToApply; j++ {
			chars = append(chars, ' ')
		}

		chars = append(chars, words[i]...)
	}
	return string(chars)
}
