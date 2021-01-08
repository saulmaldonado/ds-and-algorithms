/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const ans = [];
  backtrack(ans, '', 0, 0, n);
  return ans;
}

function backtrack(ans, currString, open, close, n) {
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
