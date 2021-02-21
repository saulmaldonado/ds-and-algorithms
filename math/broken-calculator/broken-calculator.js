/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
function brokenCalc(X, Y) {
  let ops = 0;

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
