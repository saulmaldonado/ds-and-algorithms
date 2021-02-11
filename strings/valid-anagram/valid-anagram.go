package validanagram

import (
	"sort"
	"strings"
)

func isAnagram(s string, t string) bool {
	sArr := strings.Split(s, "")
	tArr := strings.Split(t, "")

	sort.Strings(sArr)
	sort.Strings(tArr)

	return strings.Join(sArr, "") == strings.Join(tArr, "")
}

func isAnagram2(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	chars := make([]int, 26)

	for i := range s {
		chars[s[i]-'a']++
	}

	for i := range t {
		chars[t[i]-'a']--
		if chars[t[i]-'a'] < 0 {
			return false
		}
	}
	return true
}
