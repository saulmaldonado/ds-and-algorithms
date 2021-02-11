function isAnagram(s: string, t: string): boolean {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return s === t;
}

function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const chars: number[] = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    chars[code]++;
  }

  for (let i = 0; i < t.length; i++) {
    let code = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
    chars[code]--;
    if (chars[code] < 0) {
      return false;
    }
  }
  return true;
}
