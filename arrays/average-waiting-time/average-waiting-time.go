func averageWaitingTime(customers [][]int) float64 {
	chef := 0.0
	timeWaited := 0.0

	for i := 0; i < len(customers); i++ {
		chef = (math.Max(chef, float64(customers[i][0])) + float64(customers[i][1]))

		timeWaited += (chef - float64(customers[i][0]))
	}

	return timeWaited / float64(len(customers))
}
