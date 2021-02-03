package besttimetobuyandsellstock

func maxProfit(prices []int) int {
	if len(prices) < 2 {
		return 0
	}

	maxProfit := 0
	min := prices[0]

	for i := 1; i < len(prices); i++ {
		if prices[i] <= min {
			min = prices[i]
		} else {
			if prices[i]-min > maxProfit {
				maxProfit = prices[i] - min
			}
		}
	}
	return maxProfit
}
