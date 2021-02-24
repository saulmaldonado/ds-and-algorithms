function scoreOfParentheses(S: string): number {
  const stack: number[] = [];

  let score: number = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack.push(score);
      score = 0;
    } else {
      score = stack.pop() + Math.max(score * 2, 1);
    }
  }
  return score;
}

function scoreOfParentheses2(S: string): number {
  let mult: number = 1;
  let res: number = 0;

  for (let i = 0; i < S.length - 1; i++) {
    if (S[i] === '(') {
      if (S[i + 1] === ')') {
        res += mult;
        i++;
      } else {
        mult *= 2;
      }
    } else {
      mult /= 2;
    }
  }

  return res;
}
