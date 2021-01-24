function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);

  const ans: number[][] = [];
  const list: number[] = [];

  backtrack2(ans, list, candidates, target, 0);

  return ans;
}

function backtrack2(
  ans: number[][],
  list: number[],
  candidates: number[],
  target: number,
  start: number
): void {
  if (target === 0) {
    ans.push(list.slice());
  } else if (target > 0) {
    for (let k = start; k < candidates.length && target >= candidates[k]; k++) {
      if (k > start && candidates[k] === candidates[k - 1]) {
        continue;
      } else {
        list.push(candidates[k]);
        backtrack2(ans, list, candidates, target - candidates[k], k + 1);
        list.pop();
      }
    }
  }
}
