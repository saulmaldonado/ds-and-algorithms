function isPalindrome(x: number): boolean {
  let num: number = x;
  let rev: number = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return x === rev;
}
