/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxOperations(nums, k) {
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;

  let count = 0;

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum === k) {
      count++;
      i++;
      j--;
    } else if (sum < k) {
      i++;
      while (i < j && nums[i - 1] === nums[i]) {
        i++;
      }
    } else {
      j--;
      while (i < j && nums[j + 1] === nums[j]) {
        j--;
      }
    }
  }
  return count;
}

function maxOperations(nums, k) {
  const map = {};
  let count = 0;

  for (const num of nums) {
    map[num] = ~~map[num] + 1;
  }

  for (const key in map) {
    if (map[k - key]) {
      // key is a string
      if (k - key == key) {
        count += Math.floor(map[key] / 2);
        map[key] = 0;
      } else {
        count += Math.min(map[key], map[k - key]);
        map[k - key] = 0;
        map[key] = 0;
      }
    }
  }

  return count;
}
