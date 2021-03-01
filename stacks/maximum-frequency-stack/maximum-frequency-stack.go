package maximumfrequencystack

type FreqStack struct {
	freq          map[int]int
	stackOfStacks *[]*[]int
}

func Constructor() FreqStack {
	stackOfStacks := []*[]int{}
	freq := map[int]int{}
	fs := FreqStack{freq: freq, stackOfStacks: &stackOfStacks}
	return fs
}

func (this *FreqStack) Push(x int) {
	xFreq := 1

	if val, ok := this.freq[x]; ok {
		xFreq += val
	}

	this.freq[x] = xFreq

	if xFreq > len(*this.stackOfStacks) {
		*this.stackOfStacks = append(*this.stackOfStacks, &[]int{})
	}

	stack := (*this.stackOfStacks)[xFreq-1]
	*stack = append(*stack, x)
}

func (this *FreqStack) Pop() int {
	topStack := (*this.stackOfStacks)[len(*this.stackOfStacks)-1]

	returnVal := (*topStack)[len(*topStack)-1]
	*topStack = (*topStack)[:len(*topStack)-1]

	this.freq[returnVal]--

	if this.freq[returnVal] == 0 {
		delete(this.freq, returnVal)
	}

	if len(*topStack) == 0 {
		*this.stackOfStacks = (*this.stackOfStacks)[:len(*this.stackOfStacks)-1]
	}

	return returnVal
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 */
