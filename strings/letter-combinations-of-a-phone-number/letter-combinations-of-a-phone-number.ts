const phone: Record<string, string> = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

function letterCombinations(digits: string): string[] {
  const ans: string[] = [];

  if (!digits.length) {
    return ans;
  }

  backtrack(digits, '', ans);

  return ans;
}

function backtrack(digits: string, combination: string, ans: string[]): void {
  if (!digits.length) {
    ans.push(combination);
    return;
  }

  const letters: string = phone[digits[0]];
  for (let i = 0; i < letters.length; i++) {
    const letter: string = letters[i];

    backtrack(digits.substring(1), combination + letter, ans);
  }
}
