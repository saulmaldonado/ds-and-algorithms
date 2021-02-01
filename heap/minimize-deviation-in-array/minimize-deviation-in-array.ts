/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumDeviation(nums: number[]): number {
  const queue = new MaxPriorityQueue();

  const maxInt: number = 2 ** 31 - 1;

  let min: number = maxInt;
  let res: number = maxInt;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
      nums[i] *= 2;
    }
    min = Math.min(min, nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] % 2 == 0 && nums[i] >= min * 2) {
      nums[i] /= 2;
    }

    queue.enqueue(nums[i], nums[i]);
  }

  while (true) {
    let n = queue.dequeue().element;
    res = Math.min(res, n - min);

    if (n % 2 == 1) {
      return res;
    }
    min = Math.min(min, n / 2);
    n /= 2;
    queue.enqueue(n, n);
  }
}
