package sqrtx

func mySqrt(x int) int {

	if x < 2 {
		return x
	}

	left := 1
	right := x

	for left < right {
		mid := left + (right-left)/2

		sq := mid * mid

		if sq == x {
			return mid
		}

		if sq > x {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return left - 1
}
