/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s: string): number {
  let max: number = 0;
  let opening: number = 0;
  let closing: number = 0;

  for (let i = 0; i < s.length; i++) {
    const curr: string = s[i];

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
      const curr: string = s[i];

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
