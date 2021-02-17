package lettercasepermutation

import "unicode"

func letterCasePermutation(S string) []string {
	res := []string{}
	list := []byte{}

	build(S, 0, &list, &res)

	return res
}

func build(s string, i int, list *[]byte, res *[]string) {
	if i == len(s) {
		*res = append(*res, string(*list))
		return
	}

	curr := s[i]

	if unicode.IsLetter(rune(curr)) {
		*list = append(*list, byte(unicode.ToLower(rune(curr))))
		build(s, i+1, list, res)
		*list = (*list)[:len(*list)-1]

		*list = append(*list, byte(unicode.ToUpper(rune(curr))))
		build(s, i+1, list, res)
		*list = (*list)[:len(*list)-1]
	} else {
		*list = append(*list, curr)
		build(s, i+1, list, res)
		*list = (*list)[:len(*list)-1]
	}
}
