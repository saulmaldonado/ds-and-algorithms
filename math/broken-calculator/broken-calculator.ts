function brokenCalc(X: number, Y: number): number {
  let ops: number = 0;

  while (X < Y) {
    if (Y % 2 === 1) {
      Y++;
    } else {
      Y /= 2;
    }
    ops++;
  }

  return X - Y + ops;
}
