function divide(dividend, divisor) {
  // result in 2,147,483,648 which truncates to 2,147,483,647
  if (dividend === 1 << 31 && divisor === -1) {
    return ~~((1 << 31) - 1);
  }

  let sign = 1;

  if (dividend < 0) {
    sign *= -1;
  }

  if (divisor < 0) {
    sign *= -1;
  }

  let dvd = Math.abs(dividend);
  let dvr = Math.abs(divisor);

  let res = 0;

  while (dvd - dvr >= 0) {
    let x = 0;

    while (~~(dvd - ((dvr << x) << 1)) >= 0) {
      x++;
    }

    res += 1 << x;
    dvd = ~~(dvd - (dvr << x));
  }

  return ~~(res * sign);
}
