/**
 * @param {number[]} boxes
 * @return {number}
 */
function removeBoxes(boxes) {
  const n = boxes.length;
  const dp = new Array(n)
    .fill(null)
    .map(() => new Array(n).fill(null).map(() => new Array(n).fill(0)));
  return remove(boxes, 0, n - 1, 0, dp);
}

function remove(boxes, i, j, k, dp) {
  if (i > j) return 0;
  if (i === j) return (k + 1) * (k + 1);
  if (dp[i][j][k]) return dp[i][j][k];

  let left = i;
  let count = 0;

  while (left <= j && boxes[left] == boxes[i]) {
    left++;
    count++;
  }

  let start = left;

  let res = (count + k) * (count + k) + remove(boxes, start, j, 0, dp);

  let m = start;

  while (m <= j) {
    if (boxes[m] == boxes[i] && boxes[m - 1] !== boxes[i]) {
      res = Math.max(res, remove(boxes, start, m - 1, 0, dp) + remove(boxes, m, j, count + k, dp));
    }
    m++;
  }

  dp[i][j][k] = res;
  return res;
}
