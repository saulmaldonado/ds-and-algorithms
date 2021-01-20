type LRUCache struct {
	Head    *Node
	Tail    *Node
	Cap     int
	NodeMap map[int]*Node
}

type Node struct {
	Key  int
	Val  int
	Prev *Node
	Next *Node
}

func Constructor(capacity int) LRUCache {
	head := new(Node)
	tail := new(Node)

	head.Next = tail
	tail.Prev = head

	return LRUCache{head, tail, capacity, make(map[int]*Node)}
}

func (this *LRUCache) Get(key int) int {
	res := -1

	if node, ok := this.NodeMap[key]; ok {
		res = node.Val
		this.Remove(node)
		this.Add(node)
	}

	return res

}

func (this *LRUCache) Put(key int, value int) {
	if node, ok := this.NodeMap[key]; ok {
		node.Val = value
		this.Remove(node)
		this.Add(node)
	} else {
		if len(this.NodeMap) == this.Cap {
			delete(this.NodeMap, this.Tail.Prev.Key)
			this.Remove(this.Tail.Prev)
		}

		newNode := new(Node)

		newNode.Key = key
		newNode.Val = value

		this.NodeMap[key] = newNode
		this.Add(newNode)
	}
}

func (this *LRUCache) Remove(node *Node) {
	nextNode := node.Next
	prevNode := node.Prev

	nextNode.Prev = prevNode
	prevNode.Next = nextNode
}

func (this *LRUCache) Add(node *Node) {
	headNext := this.Head.Next
	this.Head.Next = node
	node.Prev = this.Head
	node.Next = headNext
	headNext.Prev = node
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * param_1 := obj.Get(key);
 * obj.Put(key,value);
 */
