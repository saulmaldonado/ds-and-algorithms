package lettercombinationsofaphonenumber

var phone map[string]string = map[string]string{
	"2": "abc",
	"3": "def",
	"4": "ghi",
	"5": "jkl",
	"6": "mno",
	"7": "pqrs",
	"8": "tuv",
	"9": "wxyz",
}

var ans []string = []string{}

func letterCombinations(digits string) []string {

	ans = []string{}

	if len(digits) == 0 {
		return ans
	}

	backtrack(digits, "")

	return ans
}

func backtrack(digits string, combination string) {
	if len(digits) == 0 {
		ans = append(ans, combination)
	} else {

		letters := phone[digits[:1]]

		for i := 0; i < len(letters); i++ {
			letter := letters[i : i+1]
			backtrack(digits[1:], combination+letter)
		}
	}

}
