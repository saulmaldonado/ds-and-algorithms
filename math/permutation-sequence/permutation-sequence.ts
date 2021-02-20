function getPermutation(n: number, k: number): string {
  const nums: number[] = [];
  const str: string[] = [];

  let fact: number = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
    nums.push(i);
  }

  k--;

  for (let i = 0; i < n; i++) {
    fact = Math.floor(fact / (n - i));
    let index = Math.floor(k / fact);
    str.push(nums[index].toString());
    nums.splice(index, 1);
    k -= index * fact;
  }

  return str.join('');
}
