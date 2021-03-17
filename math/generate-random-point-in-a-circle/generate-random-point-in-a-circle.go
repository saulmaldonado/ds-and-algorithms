package generaterandompointinacircle

import (
	"math"
	"math/rand"
)

type Solution struct {
	radis float64
	x     float64
	y     float64
}

func Constructor(radius float64, x_center float64, y_center float64) Solution {
	return Solution{radius, x_center, y_center}
}

func (this *Solution) RandPoint() []float64 {
	len := math.Sqrt(rand.Float64()) * this.radis
	deg := rand.Float64() * 2 * math.Pi
	x := this.x + len*math.Cos(deg)
	y := this.y + len*math.Sin(deg)

	return []float64{x, y}
}

/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(radius, x_center, y_center);
 * param_1 := obj.RandPoint();
 */
