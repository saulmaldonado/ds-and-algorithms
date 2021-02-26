/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
  const n = pushed.length;

  if (n === 0) {
    return true;
  }

  let i = 0;
  const stack = [];

  for (const p of pushed) {
    stack.push(p);

    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }
  return i === n;
}
