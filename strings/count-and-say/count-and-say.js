/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
  let str = '1';
  let i = 1;

  while (i < n) {
    str = say(str);
    i++;
  }

  return str;
}

/**
 *
 * @param {string} s
 * @returns {string}
 */
function say(s) {
  let curr = s[0];
  let count = 1;

  const chars = [];

  for (let i = 1; i < s.length; i++) {
    if (s[i] != curr) {
      chars.push(count.toString());
      chars.push(curr.toString());
      curr = s[i];
      count = 1;
    } else {
      count++;
    }
  }

  chars.push(count.toString());
  chars.push(curr.toString());

  return chars.join('');
}
