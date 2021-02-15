function mySqrt(x: number): number {
  if (x < 2) {
    return x;
  }

  let left = 1;
  let right = x;

  while (left < right) {
    let mid = left + ~~((right - left) / 2);

    let sq = mid * mid;

    if (sq === x) {
      return mid;
    }

    if (sq > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
}
