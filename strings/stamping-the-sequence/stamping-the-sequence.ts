function movesToStamp(stamp: string, target: string): number[] {
  const s: string[] = stamp.split('');
  const t: string[] = target.split('');
  const n: number = target.length;
  const m: number = stamp.length;

  const res: number[] = [];

  const visited: boolean[] = new Array(n).fill(false);
  let count = 0;

  while (count < n) {
    let replaced = false;
    for (let i = 0; i <= n - m; i++) {
      if (!visited[i] && canReplace(t, i, s)) {
        count = replace(t, i, m, count);

        replaced = true;
        visited[i] = true;
        res.push(i);

        if (count === n) {
          break;
        }
      }
    }

    if (!replaced) {
      return [];
    }
  }

  const ans: number[] = [];

  for (let i = res.length - 1; i >= 0; i--) {
    ans.push(res[i]);
  }

  return ans;
}

function canReplace(t: string[], start: number, s: string[]) {
  for (let i = 0; i < s.length; i++) {
    if (t[i + start] !== '?' && t[i + start] !== s[i]) {
      return false;
    }
  }
  return true;
}

function replace(t: string[], start: number, len: number, count: number) {
  for (let i = 0; i < len; i++) {
    if (t[i + start] !== '?') {
      t[i + start] = '?';
      count++;
    }
  }
  return count;
}
