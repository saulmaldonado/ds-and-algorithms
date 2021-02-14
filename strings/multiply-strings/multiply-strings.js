/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  const n = num1.length;
  const m = num2.length;

  const prods = new Array(n + m).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const n1 = num1[i].charCodeAt(0) - 48;
      const n2 = num2[j].charCodeAt(0) - 48;

      prods[i + j + 1] += n1 * n2;
    }
  }

  const p = prods.length;

  let carry = 0;

  for (let i = p - 1; i >= 0; i--) {
    let temp = (prods[i] + carry) % 10;
    carry = Math.floor((prods[i] + carry) / 10);
    prods[i] = temp;
  }

  let i = 0;
  while (i < p && prods[i] === 0) {
    i++;
  }

  if (i == p) {
    return '0';
  }

  return prods.slice(i).join('');
}
