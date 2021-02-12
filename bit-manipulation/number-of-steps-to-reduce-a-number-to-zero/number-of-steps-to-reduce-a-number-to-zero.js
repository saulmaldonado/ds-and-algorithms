/**
 * @param {number} num
 * @return {number}
 */
function numberOfSteps(num) {
  if (num == 0) return 0;

  let count = 0;

  while (num > 0) {
    if ((num & 1) === 1) {
      count += 2;
    } else {
      count++;
    }
    num >>= 1;
  }
  return count - 1;
}
