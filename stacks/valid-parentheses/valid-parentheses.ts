function isValid(s: string): boolean {
  const map: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack: string[] = [];

  for (let c of s) {
    if (stack.length && stack[stack.length - 1] === map[c]) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
}
