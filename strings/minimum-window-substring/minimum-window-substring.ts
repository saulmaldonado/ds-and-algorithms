function minWindow(s: string, t: string): string {
  const n: number = s.length;

  const freq: Record<string, number> = {};

  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (freq[c] === undefined) {
      freq[c] = 0;
    }
    freq[c]++;
  }

  const unique: number = Object.keys(freq).length;

  let left: number = 0;
  let right: number = 0;
  let count: number = 0;

  let minLeft: number = -1;
  let minRight: number = -1;
  let minLen: number = Number.MAX_SAFE_INTEGER;

  const window: Record<string, number> = {};

  while (right < n) {
    const cur: string = s[right];

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
      let len: number = right - left + 1;

      if (minLeft === -1 || len < minLen) {
        minLen = len;
        minLeft = left;
        minRight = right;
      }

      const c: string = s[left];

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
