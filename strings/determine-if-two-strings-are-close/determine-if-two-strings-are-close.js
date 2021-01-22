/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const chars1 = new Array(26).fill(0);
  const chars2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    chars1[word1[i].charCodeAt(0) - 97]++;
    chars2[word2[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < chars1.length; i++) {
    if ((chars1[i] === 0) !== (chars2[i] === 0)) {
      return false;
    }
  }

  chars1.sort((a, b) => a - b);
  chars2.sort((a, b) => a - b);

  for (let i = 0; i < chars1.length; i++) {
    if (chars1[i] !== chars2[i]) {
      return false;
    }
  }
  return true;
}
