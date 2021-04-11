/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
function movesToStamp(stamp, target) {
  const s = stamp.split('');
  const t = target.split('');
  const n = target.length;
  const m = stamp.length;

  const res = [];

  const visited = new Array(n).fill(false);
  let count = 0;

  while (count < n) {
    let replaced = false;
    for (let i = 0; i <= n - m; i++) {
      if (!visited[i] && canReplace(t, i, s)) {
        count = replace(t, i, m, count);

        replaced = true;
        visited[i] = true;
        res.push(i);

        if (count === n) {
          break;
        }
      }
    }

    if (!replaced) {
      return [];
    }
  }

  const ans = [];

  for (let i = res.length - 1; i >= 0; i--) {
    ans.push(res[i]);
  }

  return ans;
}

/**
 *
 * @param {string} t
 * @param {number} start
 * @param {string} s
 * @returns {boolean}
 */
function canReplace(t, start, s) {
  for (let i = 0; i < s.length; i++) {
    if (t[i + start] !== '?' && t[i + start] !== s[i]) {
      return false;
    }
  }
  return true;
}

/**
 *
 * @param {string} t
 * @param {number} start
 * @param {number} len
 * @param {number} count
 */
function replace(t, start, len, count) {
  for (let i = 0; i < len; i++) {
    if (t[i + start] !== '?') {
      t[i + start] = '?';
      count++;
    }
  }
  return count;
}
