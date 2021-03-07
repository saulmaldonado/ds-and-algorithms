/**
 * Initialize your data structure here.
 */

class TrieNode {
  c: string;
  isWord: boolean;
  children: TrieNode[] | null[];

  constructor(c: string) {
    this.c = c;
    this.isWord = false;
    this.children = new Array(26).fill(null);
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode('_');
  }

  insert(word: string): void {
    let curr = this.root;

    for (const c of word) {
      const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
      if (curr.children[index] === null) {
        curr.children[index] = new TrieNode(c);
      }
      curr = curr.children[index]!;
    }
    curr.isWord = true;
  }

  search(word: string): boolean {
    const node = this.getNode(word);
    return node !== null && node.isWord;
  }

  startsWith(prefix: string): boolean {
    return this.getNode(prefix) !== null;
  }

  getNode(word: string): TrieNode | null {
    let curr: TrieNode = this.root;

    for (const c of word) {
      const index = c.charCodeAt(0) - 'a'.charCodeAt(0);

      if (curr.children[index] === null) {
        return null;
      }
      curr = curr.children[index]!;
    }
    return curr;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
