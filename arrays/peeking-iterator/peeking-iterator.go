package peekingiterator

/*   Below is the interface for Iterator, which is already defined for you.
 *
 *   type Iterator struct {
 *
 *   }
 *
 *   func (this *Iterator) hasNext() bool {
 *		// Returns true if the iteration has more elements.
 *   }
 *
 *   func (this *Iterator) next() int {
 *		// Returns the next element in the iteration.
 *   }
 */

type PeekingIterator struct {
	iterator *Iterator
	head     *int
}

func Constructor(iter *Iterator) *PeekingIterator {

	var res PeekingIterator

	if iter.hasNext() {
		val := iter.next()
		res.head = &val
	}
	res.iterator = iter

	return &res
}

func (this *PeekingIterator) hasNext() bool {
	return this.head != nil
}

func (this *PeekingIterator) next() int {
	res := this.head
	if this.iterator.hasNext() {
		val := this.iterator.next()
		this.head = &val
	} else {
		this.head = nil
	}

	return *res
}

func (this *PeekingIterator) peek() int {
	return *this.head
}
