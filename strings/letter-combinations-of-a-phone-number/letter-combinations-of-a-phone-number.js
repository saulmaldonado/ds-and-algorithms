const phone = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  const ans = [];

  if (!digits.length) {
    return ans;
  }

  backtrack(digits, '', ans);

  return ans;
}

function backtrack(digits, combination, ans) {
  if (!digits.length) {
    ans.push(combination);
    return;
  }

  const letters = phone[digits[0]];
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    backtrack(digits.substring(1), combination + letter, ans);
  }
}
