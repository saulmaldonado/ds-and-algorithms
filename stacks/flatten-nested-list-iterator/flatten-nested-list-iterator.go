package flattennestedlistiterator

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * type NestedInteger struct {
 * }
 *
 * // Return true if this NestedInteger holds a single integer, rather than a nested list.
 * func (this NestedInteger) IsInteger() bool {}
 *
 * // Return the single integer that this NestedInteger holds, if it holds a single integer
 * // The result is undefined if this NestedInteger holds a nested list
 * // So before calling this method, you should have a check
 * func (this NestedInteger) GetInteger() int {}
 *
 * // Set this NestedInteger to hold a single integer.
 * func (n *NestedInteger) SetInteger(value int) {}
 *
 * // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 * func (this *NestedInteger) Add(elem NestedInteger) {}
 *
 * // Return the nested list that this NestedInteger holds, if it holds a nested list
 * // The list length is zero if this NestedInteger holds a single integer
 * // You can access NestedInteger's List element directly if you want to modify it
 * func (this NestedInteger) GetList() []*NestedInteger {}
 */

type NestedIterator struct {
	Stack *[]*NestedInteger
}

func Constructor(nestedList []*NestedInteger) *NestedIterator {
	Stack := &[]*NestedInteger{}
	ni := NestedIterator{Stack}
	ni.flatten(nestedList)
	return &ni
}

func (this *NestedIterator) Next() int {
	if this.HasNext() {
		popped := (*this.Stack)[len(*this.Stack)-1].GetInteger()
		*this.Stack = (*this.Stack)[:len(*this.Stack)-1]
		return popped
	}
	return 0
}

func (this *NestedIterator) HasNext() bool {
	for len(*this.Stack) > 0 {
		if (*this.Stack)[len(*this.Stack)-1].IsInteger() {
			return true
		}
		popped := (*this.Stack)[len(*this.Stack)-1]
		*this.Stack = (*this.Stack)[:len(*this.Stack)-1]
		this.flatten(popped.GetList())
	}
	return false
}

func (ni *NestedIterator) flatten(list []*NestedInteger) {
	for i := len(list) - 1; i >= 0; i-- {
		*ni.Stack = append(*ni.Stack, list[i])
	}
}
