function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];

  if (!candidates.length) {
    return ans;
  }

  candidates.sort((a, b) => a - b);

  const list: number[] = [];

  add(candidates, target, 0, ans, list, 0);

  return ans;
}

function add(
  candidates: number[],
  target: number,
  sum: number,
  ans: number[][],
  list: number[],
  start: number
) {
  if (sum === target) {
    ans.push(list.slice());
    return;
  } else if (sum > target) {
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    sum += candidates[i];
    list.push(candidates[i]);

    add(candidates, target, sum, ans, list, i);

    list.pop();

    sum -= candidates[i];
  }
}
