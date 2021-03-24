function threeSumMulti(arr: number[], target: number): number {
  if (arr === null || arr.length < 3) {
    return 0;
  }

  const MOD: number = 1_000_000_007;

  const n: number = arr.length;
  arr.sort((a, b) => a - b);
  let count: number = 0;

  for (let i = 0; i < n - 2; i++) {
    let left: number = i + 1;
    let right: number = n - 1;

    while (left < right) {
      let sum: number = arr[i] + arr[left] + arr[right];

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else if (arr[left] == arr[right]) {
        count += ((right - left + 1) * (right - left)) / 2;
        count %= MOD;
        break;
      } else {
        let leftCount: number = 1;
        let rightCount: number = 1;

        while (left + 1 < right && arr[left] == arr[left + 1]) {
          leftCount++;
          left++;
        }

        while (right - 1 > left && arr[right] == arr[right - 1]) {
          rightCount++;
          right--;
        }

        count += leftCount * rightCount;
        count %= MOD;
        left++;
        right--;
      }
    }
  }
  return count;
}
