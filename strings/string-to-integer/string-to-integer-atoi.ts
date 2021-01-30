function myAtoi(s: string): number {
  const chars: string[] = s.split('');

  let i: number = 0;
  let sign: number = 1;

  while (i < chars.length && chars[i] === ' ') {
    i++;
  }

  if (i < chars.length && chars[i] === '-') {
    sign = -1;
    i++;
  } else if (i < chars.length && chars[i] === '+') {
    i++;
  }

  let sum = 0;

  while (i < chars.length && chars[i] >= '0' && chars[i] <= '9') {
    sum = sum * 10 + (chars[i].charCodeAt(0) - '0'.charCodeAt(0)) * sign;

    if (sum > 2 ** 31 - 1) {
      return 2 ** 31 - 1;
    }
    if (sum < -(2 ** 31)) {
      return -(2 ** 31);
    }
    i++;
  }

  return sum;
}
