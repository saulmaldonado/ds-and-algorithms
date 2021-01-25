function kLengthApart(nums: number[], k: number): boolean {
  let prevIndex: number = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (prevIndex > -1 && i - prevIndex - 1 < k) {
        return false;
      }
      prevIndex = i;
    }
  }

  return true;
}

function kLengthApart2(nums: number[], k: number): boolean {
  let x: number = 0;

  for (let n of nums) {
    x = x << 1; // push existing bits in x to left
    x = x | n; // flip first bit to 1 if n is 1
  }

  // edge case for array of 0s or k = 0
  if (x == 0 || k == 0) {
    return true;
  }

  // remove trailing 0s
  while ((x & 1) == 0) {
    // while last bit is 0
    x = x >> 1; // shift bits to left removing the first bit
  }

  while (x != 1) {
    // shift bits right until there is only one left
    x = x >> 1; // shift to right

    let count: number = 0;

    while ((x & 1) == 0) {
      // shift 0s between 1s counting along the way
      x = x >> 1;
      count++;
    }

    if (count < k) {
      // check is count is equal to or greater than k
      return false;
    }
  }

  return true;
}
