/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let start = 0;
  let end = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = findLongest(s, i, i);
    const len2 = findLongest(s, i, i + 1);

    const len = Math.max(len1, len2);

    if (len > maxLen) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
      maxLen = len;
    }
  }

  return s.substring(start, end + 1);
}

function findLongest(s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }

  return j - i - 1;
}

function longestPalindrome2(s) {
  s = insertHashes(s);

  const lengths = new Array(s.length).fill(0);

  let center = 0;
  let right = 0;
  let maxIndex = 0;

  for (let i = 0; i < s.length; i++) {
    let mirror = 2 * center - i;

    if (i < right) {
      lengths[i] = Math.min(lengths[mirror], right - i);
    }

    lengths[i] = findLongest2(s, i, lengths[i]);

    if (i + lengths[i] > right) {
      center = i;
      right = i + lengths[i];
    }

    if (lengths[i] > lengths[maxIndex]) {
      maxIndex = i;
    }
  }

  const start = maxIndex - lengths[maxIndex];
  const end = maxIndex + lengths[maxIndex];

  return removeHashes(s.substring(start, end + 1));
}

function insertHashes(s) {
  const chars = [];

  for (let i = 0; i < s.length; i++) {
    chars.push('#');
    chars.push(s[i]);
  }
  chars.push('#');

  return chars.join('');
}

function removeHashes(s) {
  return s
    .split('')
    .filter((c) => c !== '#')
    .join('');
}

function findLongest2(s, i, length) {
  let start = i - length - 1;
  let end = i + length + 1;
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    length++;
    start--;
    end++;
  }
  return length;
}
