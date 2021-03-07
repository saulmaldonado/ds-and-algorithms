/**
 * Initialize your data structure here.
 */
function Trie() {
  this.root = new Node('_');
}

function Node(c) {
  this.c = c;
  this.isWord = false;
  this.children = new Array(26).fill(null);
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let curr = this.root;

  for (const c of word) {
    const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
    if (curr.children[index] === null) {
      curr.children[index] = new Node(c);
    }
    curr = curr.children[index];
  }
  curr.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.getNode(word);
  return node !== null && node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.getNode(prefix) !== null;
};

Trie.prototype.getNode = function (word) {
  let curr = this.root;

  for (const c of word) {
    const index = c.charCodeAt(0) - 'a'.charCodeAt(0);

    if (curr.children[index] === null) {
      return null;
    }
    curr = curr.children[index];
  }
  return curr;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
