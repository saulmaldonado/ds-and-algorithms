function countAndSay(n: number): string {
  let str: string = '1';
  let i: number = 1;

  while (i < n) {
    str = say(str);
    i++;
  }

  return str;
}

function say(s: string): string {
  let curr: string = s[0];
  let count: number = 1;

  const chars: string[] = [];

  for (let i = 1; i < s.length; i++) {
    if (s[i] != curr) {
      chars.push(count.toString());
      chars.push(curr.toString());
      curr = s[i];
      count = 1;
    } else {
      count++;
    }
  }

  chars.push(count.toString());
  chars.push(curr.toString());

  return chars.join('');
}
