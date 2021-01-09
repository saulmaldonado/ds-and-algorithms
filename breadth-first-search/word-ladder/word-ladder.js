/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord, endWord, wordList) {
  const set = new Set(wordList);

  if (!set.has(endWord)) {
    return 0;
  }

  const queue = [];

  queue.push(beginWord);

  let level = 1;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      const chars = curr.split('');

      for (let j = 0; j < chars.length; j++) {
        const original = chars[j];
        for (
          let c = 'a';
          c.charCodeAt(0) <= 'z'.charCodeAt(0);
          c = String.fromCharCode(c.charCodeAt(0) + 1)
        ) {
          if (chars[j] == c) {
            continue;
          }

          chars[j] = c;

          const newWord = chars.join('');

          if (newWord === endWord) {
            return level + 1;
          }

          if (set.has(newWord)) {
            queue.push(newWord);
            set.delete(newWord);
          }
        }
        chars[j] = original;
      }
    }
    level++;
  }
  return 0;
}
