package brokencalculator

func brokenCalc(X int, Y int) int {
	ops := 0

	for X < Y {
		if Y%2 == 1 {
			Y++
		} else {
			Y /= 2
		}

		ops++
	}

	return X - Y + ops
}
