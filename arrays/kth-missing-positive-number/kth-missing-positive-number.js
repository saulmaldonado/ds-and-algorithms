/** // O(log n)
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositive(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = ~~(left + (right - left) / 2); // ~~ converts to int32. this works for following constraints but can cause int overflow with large numbers

    if (arr[mid] - mid - 1 >= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left + k;
}

// O(n)
function findKthPositive(arr, k) {
  let i;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] - i - 1 >= k) {
      return i + k;
    }
  }

  return i + k;
}
