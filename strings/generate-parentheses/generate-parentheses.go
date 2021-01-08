func generateParenthesis(n int) []string {
	ans := []string{}

	backtrack(&ans, "", 0, 0, n)
	return ans
}

func backtrack(ans *[]string, currString string, open int, close int, n int) {
	if len(currString) == n*2 {
		*ans = append(*ans, currString)
	} else {
		if open < n {
			backtrack(ans, currString+"(", open+1, close, n)
		}

		if close < open {
			backtrack(ans, currString+")", open, close+1, n)
		}
	}

}
