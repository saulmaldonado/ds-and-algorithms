package stringtointeger

import "math"

func myAtoi(s string) int {
	chars := []byte(s)

	i := 0
	var sign int64 = 1

	for i < len(chars) && chars[i] == ' ' {
		i++
	}

	if i < len(chars) && chars[i] == '-' {
		sign = -1
		i++
	} else if i < len(chars) && chars[i] == '+' {
		i++
	}

	var sum int64 = 0

	if i < len(chars) && chars[i] >= '0' && chars[i] <= '9' {
		sum = (sum * 10) + int64(chars[i]-'0')*sign

		if sum > math.MaxInt32 {
			return math.MaxInt32
		}
		if sum < math.MinInt32 {
			return math.MinInt32
		}
	}

	return int(sum)
}
