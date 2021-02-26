function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const n: number = pushed.length;

  if (n === 0) {
    return true;
  }

  let i: number = 0;
  const stack: number[] = [];

  for (const p of pushed) {
    stack.push(p);

    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }
  return i === n;
}
