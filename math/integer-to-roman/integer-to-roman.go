package integertoroman

import "strings"

func intToRoman(num int) string {
	values := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	roman := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}

	sb := []string{}

	for i, value := range values {
		quotient := num / value
		if quotient > 0 {
			for j := 0; j < quotient; j++ {
				sb = append(sb, roman[i])
			}
			num %= (quotient * value)
		}

		if num == 0 {
			return strings.Join(sb, "")
		}
	}
	return strings.Join(sb, "")
}
