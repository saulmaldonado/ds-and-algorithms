package implementtrieprefixtree

type Trie struct {
	root *Node
}

type Node struct {
	c        byte
	isWord   bool
	children []*Node
}

/** Initialize your data structure here. */
func Constructor() Trie {
	return Trie{&Node{c: '_', isWord: false, children: make([]*Node, 26)}}
}

/** Inserts a word into the trie. */
func (this *Trie) Insert(word string) {
	curr := this.root

	for _, c := range word {
		if curr.children[c-'a'] == nil {
			curr.children[c-'a'] = &Node{c: byte(c), isWord: false, children: make([]*Node, 26)}
		}
		curr = curr.children[c-'a']
	}
	curr.isWord = true
}

/** Returns if the word is in the trie. */
func (this *Trie) Search(word string) bool {
	node := this.getNode(word)
	return node != nil && node.isWord
}

/** Returns if there is any word in the trie that starts with the given prefix. */
func (this *Trie) StartsWith(prefix string) bool {
	return this.getNode(prefix) != nil
}

func (this *Trie) getNode(word string) *Node {
	curr := this.root

	for _, c := range word {
		if curr.children[c-'a'] == nil {
			return nil
		}
		curr = curr.children[c-'a']
	}
	return curr
}

/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */
