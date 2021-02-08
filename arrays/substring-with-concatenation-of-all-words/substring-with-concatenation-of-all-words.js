/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  const res = [];
  const map = {};

  for (let i = 0; i < words.length; i++) {
    map[words[i]] = ~~map[words[i]] + 1;
  }

  let wordsLen = words.length;
  let len = words[0].length;

  for (let i = 0; i < len; i++) {
    search(s, map, res, i, len, wordsLen);
  }

  return res;
}

function search(s, map, res, i, len, wordsLen) {
  let seen = {};

  let count = 0;
  let start = i;

  for (let j = i; i <= s.length - len; i += len) {
    const word = s.substring(i, i + len);

    if (map[word]) {
      seen[word] = ~~seen[word] + 1;

      count++;

      while (seen[word] > map[word]) {
        let left = s.substring(start, start + len);
        seen[left] = ~~seen[left] - 1;

        count--;
        start = start + len;
      }

      if (count === wordsLen) {
        res.push(start);

        let left = s.substring(start, start + len);

        seen[left] = ~~seen[left] - 1;

        count--;
        start = start + len;
      }
    } else {
      seen = {};
      start = i + len;
      count = 0;
    }
  }
}
