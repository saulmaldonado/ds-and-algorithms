package scoreofparentheses

func scoreOfParentheses(S string) int {
	stack := []int{}

	score := 0

	for i := range S {
		c := S[i]

		if c == '(' {
			stack = append(stack, score)
			score = 0
		} else {
			temp := stack[len(stack)-1]
			levelScore := score * 2
			if levelScore == 0 {
				levelScore = 1
			}
			score = temp + levelScore

			stack = stack[:len(stack)-1]
		}
	}
	return score
}

func scoreOfParentheses2(S string) int {
	mult := 1

	res := 0

	for i := 0; i < len(S)-1; i++ {
		if S[i] == '(' {
			if S[i+1] == ')' {
				res += mult
				i++
			} else {
				mult *= 2
			}
		} else {
			mult /= 2
		}
	}
	return res
}
