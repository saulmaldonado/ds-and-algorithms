/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let max = 0;
  let opening = 0;
  let closing = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (curr === '(') {
      opening++;
    } else {
      closing++;
      if (closing > opening) {
        closing = 0;
        opening = 0;
      } else if (closing === opening) {
        max = Math.max(max, closing + opening);
      }
    }
  }

  if (closing < opening) {
    opening = 0;
    closing = 0;

    for (let i = s.length - 1; i >= 0; i--) {
      const curr = s[i];

      if (curr === '(') {
        opening++;

        if (opening > closing) {
          closing = 0;
          opening = 0;
        } else if (closing === opening) {
          max = Math.max(max, opening + closing);
        }
      } else {
        closing++;
      }
    }
  }
  return max;
}
