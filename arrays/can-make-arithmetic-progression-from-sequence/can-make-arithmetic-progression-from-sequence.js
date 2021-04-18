/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canMakeArithmeticProgression(arr) {
  const n = arr.length;
  let min = ~~((1 << 31) - 1);
  let max = ~~(1 << 31);

  const set = new Set();

  for (let num of arr) {
    min = Math.min(num, min);
    max = Math.max(num, max);
    set.add(num);
  }

  let d = max - min;
  if (d % (n - 1) != 0) {
    return false;
  }

  d = Math.floor(d / (n - 1));
  let i = 0;
  while (i < n) {
    if (!set.has(min)) {
      return false;
    }
    min += d;
    i++;
  }

  return true;
}
