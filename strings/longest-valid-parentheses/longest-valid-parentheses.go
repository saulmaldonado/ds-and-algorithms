package longestvalidparentheses

func longestValidParentheses(s string) int {
	max := 0
	opening := 0
	closing := 0

	for i := 0; i < len(s); i++ {
		curr := s[i]

		if curr == '(' {
			opening++
		} else {
			closing++

			if closing > opening {
				closing, opening = 0, 0
			} else if closing == opening {
				sum := opening + closing
				if max < sum {
					max = sum
				}
			}
		}
	}

	if opening > closing {
		opening, closing = 0, 0

		for i := len(s) - 1; i >= 0; i-- {
			curr := s[i]

			if curr == '(' {
				opening++
				if closing < opening {
					closing, opening = 0, 0

				} else if closing == opening {
					sum := closing + opening
					if sum > max {
						max = sum
					}
				}
			} else {
				closing++
			}
		}
	}
	return max
}
