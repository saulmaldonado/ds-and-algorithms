package stampingthesequence

func movesToStamp(stamp string, target string) []int {
	s := []byte(stamp)
	t := []byte(target)

	n := len(t)
	m := len(s)

	res := []int{}

	visited := make([]bool, n)
	count := 0

	for count < n {
		replaced := false
		for i := 0; i <= n-m; i++ {
			if !visited[i] && canReplace(t, i, s) {
				count = replace(t, i, m, count)
				replaced = true
				visited[i] = true
				res = append(res, i)

				if count == n {
					break
				}
			}
		}

		if !replaced {
			return []int{}
		}
	}

	ans := []int{}

	for i := len(res) - 1; i >= 0; i-- {
		ans = append(ans, res[i])
	}

	return ans
}

func canReplace(t []byte, start int, s []byte) bool {
	for i := 0; i < len(s); i++ {
		if t[i+start] != '?' && t[i+start] != s[i] {
			return false
		}
	}
	return true
}

func replace(t []byte, start int, len int, count int) int {
	for i := 0; i < len; i++ {
		if t[i+start] != '?' {
			t[i+start] = '?'
			count++
		}
	}
	return count
}
