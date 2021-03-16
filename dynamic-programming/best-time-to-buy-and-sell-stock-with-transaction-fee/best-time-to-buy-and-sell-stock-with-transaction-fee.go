package besttimetobuyandsellstockwithtransactionfee

func maxProfit(prices []int, fee int) int {
	n := len(prices)
	profits := 0
	hold := -prices[0]

	for i := 1; i < n; i++ {
		selling := hold + prices[i] - fee
		if selling > profits {
			profits = selling
		}

		holding := profits - prices[i]
		if holding > hold {
			hold = holding
		}
	}
	return profits
}
