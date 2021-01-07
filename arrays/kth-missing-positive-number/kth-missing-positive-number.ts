// O(log n)
function findKthPositive(arr: number[], k: number): number {
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    let mid: number = ~~(left + (right - left) / 2);

    if (arr[mid] - mid - 1 >= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left + k;
}

// O(n)
function findKthPositive(arr: number[], k: number): number {
  let i: number;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] - i - 1 >= k) {
      return i + k;
    }
  }

  return i + k;
}
