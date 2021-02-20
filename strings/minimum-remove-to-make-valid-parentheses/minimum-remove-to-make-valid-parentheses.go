package minimumremovetomakevalidparentheses

func minRemoveToMakeValid(s string) string {
	n := len(s)
	open := 0

	chars := []byte(s)

	for i := 0; i < n; i++ {
		cur := chars[i]
		if cur == ')' {
			if open == 0 {
				chars[i] = '*'
			} else {
				open--
			}
		} else if cur == '(' {
			open++
		}
	}

	close := 0

	for i := n - 1; i >= 0; i-- {
		cur := chars[i]

		if cur == '(' {
			if close == 0 {
				chars[i] = '*'
			} else {
				close--
			}
		} else if cur == ')' {
			close++
		}
	}

	builder := []byte{}

	for _, c := range chars {
		if c != '*' {
			builder = append(builder, c)
		}
	}

	return string(builder)

}
