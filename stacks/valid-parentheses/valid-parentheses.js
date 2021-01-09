/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];

  for (let c of s) {
    if (stack.length && stack[stack.length - 1] === map[c]) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}
