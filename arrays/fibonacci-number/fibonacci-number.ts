function fib(n: number): number {
  if (n === 0) {
    return 0;
  }

  let curr = 1;
  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    curr = first + second;
    first = second;
    second = curr;
  }

  return curr;
}
