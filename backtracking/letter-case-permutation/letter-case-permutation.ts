function letterCasePermutation(S: string): string[] {
  const res: string[] = [];
  const list: string[] = [];

  build(S, 0, list, res);

  return res;
}

function build(s: string, i: number, list: string[], res: string[]): void {
  if (i === s.length) {
    res.push(list.slice().join(''));
    return;
  }

  const curr: string = s[i];

  if (curr.charCodeAt(0) >= 65 && curr.charCodeAt(0) <= 122) {
    list.push(curr.toLowerCase());
    build(s, i + 1, list, res);
    list.pop();

    list.push(curr.toUpperCase());
    build(s, i + 1, list, res);
    list.pop();
  } else {
    list.push(curr);
    build(s, i + 1, list, res);
    list.pop();
  }
}
