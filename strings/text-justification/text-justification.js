/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
  const res = [];
  const n = words.length;

  let left = 0;

  while (left < n) {
    let len = words[left].length;

    let right = left + 1;

    while (right < n && len + words[right].length + (right - left) <= maxWidth) {
      len += words[right].length;
      right++;
    }

    let extra = maxWidth - len;

    if (right - left === 1 || right === n) {
      res.push(leftJustify(words, left, right, extra));
    } else {
      res.push(midJustify(words, left, right, extra));
    }

    left = right;
  }

  return res;
}

/**
 *
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @param {number} extra
 * @returns {string}
 */
function leftJustify(words, left, right, extra) {
  const rightSpaces = extra - (right - left - 1);

  const chars = [words[left]];

  for (let i = left + 1; i < right; i++) {
    chars.push(' ' + words[i]);
  }

  for (let i = 0; i < rightSpaces; i++) {
    chars.push(' ');
  }

  return chars.join('');
}

/**
 *
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @param {number} extra
 * @returns {string}
 */

function midJustify(words, left, right, extra) {
  const boundaries = right - left - 1;
  const spaces = Math.floor(extra / boundaries);

  let extraSpaces = extra % boundaries;

  const chars = [words[left]];

  for (let i = left + 1; i < right; i++) {
    let spacesToApply = spaces;

    if (extraSpaces > 0) {
      extraSpaces--;
      spacesToApply++;
    }

    for (let i = 0; i < spacesToApply; i++) {
      chars.push(' ');
    }

    chars.push(words[i]);
  }

  return chars.join('');
}
