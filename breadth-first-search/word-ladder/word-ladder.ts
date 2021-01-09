function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const set: Set<string> = new Set(wordList);

  if (!set.has(endWord)) {
    return 0;
  }

  const queue: string[] = [];

  queue.push(beginWord);

  let level: number = 1;

  while (queue.length) {
    const size: number = queue.length;

    for (let i = 0; i < size; i++) {
      const curr: string = queue.shift();
      const chars: string[] = curr.split('');

      for (let j = 0; j < chars.length; j++) {
        const original: string = chars[j];
        for (
          let c: string = 'a';
          c.charCodeAt(0) <= 'z'.charCodeAt(0);
          c = String.fromCharCode(c.charCodeAt(0) + 1)
        ) {
          if (chars[j] == c) {
            continue;
          }

          chars[j] = c;

          const newWord: string = chars.join('');

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
