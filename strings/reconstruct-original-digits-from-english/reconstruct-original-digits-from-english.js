/**
 * @param {string} s
 * @return {string}
 */
function originalDigits(s) {
  const count = new Array(10).fill(0);
  for (const c of s) {
    if (c == 'z') {
      count[0]++;
    } else if (c == 'w') {
      count[2]++;
    } else if (c == 'u') {
      count[4]++;
    } else if (c == 'x') {
      count[6]++;
    } else if (c == 'g') {
      count[8]++;
    } else if (c == 's') {
      count[7]++;
    } else if (c == 'h') {
      count[3]++;
    } else if (c == 'f') {
      count[5]++;
    } else if (c == 'i') {
      count[9]++;
    } else if (c == 'o') {
      count[1]++;
    }
  }

  count[7] -= count[6];
  count[5] -= count[4];
  count[3] -= count[8];
  count[9] = count[9] - count[8] - count[5] - count[6];
  count[1] = count[1] - count[0] - count[2] - count[4];

  const sb = [];

  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      sb.push(i);
    }
  }
  return sb.join('');
}
