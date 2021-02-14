function multiply(num1: string, num2: string): string {
  const n: number = num1.length;
  const m: number = num2.length;

  const prods: number[] = new Array(n + m).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const n1 = num1[i].charCodeAt(0) - 48;
      const n2 = num2[j].charCodeAt(0) - 48;

      prods[i + j + 1] += n1 * n2;
    }
  }

  const p: number = prods.length;

  let carry: number = 0;

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
