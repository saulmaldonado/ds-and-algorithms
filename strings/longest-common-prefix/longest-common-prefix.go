package longestcommonprefix

// Time: O(n) (up to the length of the shortest string in the array)
// Space: O(1)
func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	for i := range strs[0] {
		curr := strs[0][i]

		for j := 1; j < len(strs); j++ {
			if i == len(strs[j]) || curr != strs[j][i] {
				return strs[0][:i]
			}
		}

	}

	return strs[0]
}
