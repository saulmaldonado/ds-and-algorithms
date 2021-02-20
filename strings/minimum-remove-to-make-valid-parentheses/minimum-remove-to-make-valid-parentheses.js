/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
  const n = s.length;
  let open = 0;

  const chars = s.split('');

  for (let i = 0; i < n; i++) {
    const cur = chars[i];

    if (cur === ')') {
      if (open === 0) {
        chars[i] = '*';
      } else {
        open--;
      }
    } else if (cur === '(') {
      open++;
    }
  }

  let close = 0;

  for (let i = n - 1; i >= 0; i--) {
    const cur = chars[i];

    if (cur === '(') {
      if (close === 0) {
        chars[i] = '*';
      } else {
        close--;
      }
    } else if (cur == ')') {
      close++;
    }
  }

  const builder = [];

  for (let i = 0; i < n; i++) {
    const cur = chars[i];
    if (c !== '*') {
      builder.push(cur);
    }
  }
  return builder.join('');
}
