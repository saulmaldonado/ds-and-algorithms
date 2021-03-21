package designundergroundsystem

type Pair struct {
	key, value interface{}
}

type UndergroundSystem struct {
	checkins  map[int]Pair
	checkouts map[string]Pair
}

func Constructor() UndergroundSystem {
	return UndergroundSystem{checkins: make(map[int]Pair), checkouts: make(map[string]Pair)}
}

func (this *UndergroundSystem) CheckIn(id int, stationName string, t int) {
	this.checkins[id] = Pair{stationName, t}
}

func (this *UndergroundSystem) CheckOut(id int, stationName string, t int) {
	checkin := this.checkins[id]
	route := checkin.key.(string) + "->" + stationName
	time := t - checkin.value.(int)
	if checkout, ok := this.checkouts[route]; ok {
		this.checkouts[route] = Pair{checkout.key.(int) + time, checkout.value.(int) + 1}
	} else {
		this.checkouts[route] = Pair{time, 1}
	}
}

func (this *UndergroundSystem) GetAverageTime(startStation string, endStation string) float64 {
	route := startStation + "->" + endStation
	checkout := this.checkouts[route]
	return float64(checkout.key.(int)) / float64(checkout.value.(int))
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * obj := Constructor();
 * obj.CheckIn(id,stationName,t);
 * obj.CheckOut(id,stationName,t);
 * param_3 := obj.GetAverageTime(startStation,endStation);
 */
