function fullJustify(words: string[], maxWidth: number): string[] {
  const res: string[] = [];
  const n: number = words.length;

  let left: number = 0;

  while (left < n) {
    let len: number = words[left].length;

    let right: number = left + 1;

    while (right < n && len + words[right].length + (right - left) <= maxWidth) {
      len += words[right].length;
      right++;
    }

    let extra: number = maxWidth - len;

    if (right - left === 1 || right === n) {
      res.push(leftJustify(words, left, right, extra));
    } else {
      res.push(midJustify(words, left, right, extra));
    }

    left = right;
  }

  return res;
}

function leftJustify(words: string[], left: number, right: number, extra: number): string {
  const rightSpaces: number = extra - (right - left - 1);

  const chars: string[] = [words[left]];

  for (let i = left + 1; i < right; i++) {
    chars.push(' ' + words[i]);
  }

  for (let i = 0; i < rightSpaces; i++) {
    chars.push(' ');
  }

  return chars.join('');
}

function midJustify(words: string[], left: number, right: number, extra: number): string {
  const boundaries: number = right - left - 1;
  const spaces: number = Math.floor(extra / boundaries);

  let extraSpaces: number = extra % boundaries;

  const chars: string[] = [words[left]];

  for (let i = left + 1; i < right; i++) {
    let spacesToApply: number = spaces;

    if (extraSpaces > 0) {
      extraSpaces--;
      spacesToApply++;
    }

    for (let i = 0; i < spacesToApply; i++) {
      chars.push(' ');
    }

    chars.push(words[i]);
  }

  return chars.join('');
}
