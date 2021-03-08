/**
 * @param {string[]} words
 * @return {number}
 */
function minimumLengthEncoding(words) {
  const wordsIncluded = new Set(words);

  for (const word of words) {
    for (let i = 1; i < word.length; i++) {
      const prefix = word.substring(i);

      if (wordsIncluded.has(prefix)) {
        wordsIncluded.delete(prefix);
      }
    }
  }

  let len = 0;

  for (const word of wordsIncluded) {
    len += word.length + 1;
  }
  return len;
}
