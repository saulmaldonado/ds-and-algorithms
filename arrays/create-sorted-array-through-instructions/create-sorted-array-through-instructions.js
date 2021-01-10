/**
 * @param {number[]} instructions
 * @return {number}
 */
function createSortedArray(instructions) {
  let res = 0;
  const n = instructions.length;
  const mod = 1e9 + 7;
  const c = new Array(10e5 + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const min = (res + Math.min(get(instructions[i] - 1, c), i - get(instructions[i], c))) % mod;
    res = min;
    update(instructions[i], c);
  }
  return res;
}

function get(x, c) {
  let res = 0;

  while (x > 0) {
    res += c[x];
    x -= x & -x;
  }

  return res;
}

function update(x, c) {
  while (x < 10e5 + 1) {
    c[x]++;
    x += x & -x;
  }
}
