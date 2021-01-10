function reverse(x: number): number {
  const max: number = 2 ** 31 - 1;
  const min: number = -(2 ** 31);

  let rev = 0;

  while (x !== 0) {
    let add = x % 10;

    x = ~~(x / 10);

    if (rev > max / 10 || (rev == max / 10 && add > 7)) {
      return 0;
    }

    if (rev < min / 10 || (rev == min / 10 && add < -8)) {
      return 0;
    }

    rev = rev * 10 + add;
  }

  return rev;
}
