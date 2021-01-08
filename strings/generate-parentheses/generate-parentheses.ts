function generateParenthesis(n: number): string[] {
  const ans: string[] = [];
  backtrack(ans, '', 0, 0, n);
  return ans;
}

function backtrack(ans: string[], currString: string, open: number, close: number, n: number) {
  if (currString.length === n * 2) {
    ans.push(currString);
    return;
  }

  if (open < n) {
    backtrack(ans, currString + '(', open + 1, close, n);
  }

  if (close < open) {
    backtrack(ans, currString + ')', open, close + 1, n);
  }
}
