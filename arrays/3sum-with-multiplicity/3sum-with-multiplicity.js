/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function threeSumMulti(arr, target) {
  if (arr === null || arr.length < 3) {
    return 0;
  }
  const MOD = 1_000_000_007;

  const n = arr.length;
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else if (arr[left] == arr[right]) {
        count += ((right - left + 1) * (right - left)) / 2;
        count %= MOD;
        break;
      } else {
        let leftCount = 1;
        let rightCount = 1;

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
