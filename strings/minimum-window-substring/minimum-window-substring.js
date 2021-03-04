/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  const n = s.length;

  const freq = {};

  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (freq[c] === undefined) {
      freq[c] = 0;
    }
    freq[c]++;
  }

  const unique = Object.keys(freq).length;

  let left = 0;
  let right = 0;
  let count = 0;

  let minLeft = -1;
  let minRight = -1;
  let minLen = Number.MAX_SAFE_INTEGER;

  const window = {};

  while (right < n) {
    const cur = s[right];

    if (freq[cur] !== undefined) {
      if (window[cur] === undefined) {
        window[cur] = 0;
      }

      window[cur]++;

      if (freq[cur] === window[cur]) {
        count++;
      }
    }

    while (left <= right && unique === count) {
      let len = right - left + 1;

      if (minLeft === -1 || len < minLen) {
        minLen = len;
        minLeft = left;
        minRight = right;
      }

      const c = s[left];

      if (freq[c] !== undefined) {
        window[c]--;

        if (window[c] < freq[c]) {
          count--;
        }
      }
      left++;
    }
    right++;
  }

  if (minLeft === -1) {
    return '';
  }

  return s.substring(minLeft, minRight + 1);
}
