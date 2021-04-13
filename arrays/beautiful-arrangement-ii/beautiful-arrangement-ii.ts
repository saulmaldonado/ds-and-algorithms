function constructArray(n: number, k: number): number[] {
  const res: number[] = new Array(n).fill(0);

  let left = 1;
  let right = k + 1;
  let i = 0;

  while (left < right) {
    res[i] = left;
    left++;
    i++;
    res[i] = right;
    right--;
    i++;
  }

  if (left == right) {
    res[i] = left;
    i++;
  }

  for (let j = k + 2; j <= n; j++) {
    res[i] = j;
    i++;
  }

  return res;
}
