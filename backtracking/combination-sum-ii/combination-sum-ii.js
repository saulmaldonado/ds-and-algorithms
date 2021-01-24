/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);

  const ans = [];
  const list = [];

  backtrack(ans, list, candidates, target, 0);

  return ans;
}

function backtrack(ans, list, candidates, target, start) {
  if (target === 0) {
    ans.push(list.slice());
  } else if (target > 0) {
    for (let k = start; k < candidates.length && target >= candidates[k]; k++) {
      if (k > start && candidates[k] === candidates[k - 1]) {
        continue;
      } else {
        list.push(candidates[k]);
        backtrack(ans, list, candidates, target - candidates[k], k + 1);
        list.pop();
      }
    }
  }
}
