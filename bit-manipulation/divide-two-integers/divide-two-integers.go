package dividetwointegers

import "math"

func divide(dividend int, divisor int) int {
	if dividend == math.MinInt32 && divisor == -1 { // result in 2,147,483,648 which truncates to 2,147,483,647
		return (1 << 31) - 1
	}

	sign := 1

	if dividend < 0 {
		sign *= -1
	}

	if divisor < 0 {
		sign *= -1
	}

	dvd := dividend

	if dvd < 0 {
		dvd *= -1
	}

	dvr := divisor

	if dvr < 0 {
		dvr *= -1
	}

	res := 0

	for dvd-dvr >= 0 {
		x := 0

		for dvd-(dvr<<x<<1) >= 0 {
			x++
		}

		res += 1 << x

		dvd -= dvr << x
	}

	return res * sign
}
