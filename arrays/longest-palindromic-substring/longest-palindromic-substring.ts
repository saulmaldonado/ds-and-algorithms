function longestPalindrome(s: string): string {
  let start: number = 0;
  let end: number = 0;
  let maxLen: number = 0;

  for (let i = 0; i < s.length; i++) {
    const len1: number = findLongest(s, i, i);
    const len2: number = findLongest(s, i, i + 1);

    const len: number = Math.max(len1, len2);

    if (len > maxLen) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
      maxLen = len;
    }
  }

  return s.substring(start, end + 1);
}

function findLongest(s: string, i: number, j: number): number {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }

  return j - i - 1;
}

function longestPalindrome2(s: string): string {
  s = insertHashes(s);

  const lengths: number[] = new Array(s.length).fill(0);

  let center: number = 0;
  let right: number = 0;
  let maxIndex: number = 0;

  for (let i = 0; i < s.length; i++) {
    let mirror: number = 2 * center - i;

    if (i < right) {
      lengths[i] = Math.min(lengths[mirror], right - i);
    }

    lengths[i] = findLongest2(s, i, lengths[i]);

    if (i + lengths[i] > right) {
      center = i;
      right = i + lengths[i];
    }

    if (lengths[i] > lengths[maxIndex]) {
      maxIndex = i;
    }
  }

  const start: number = maxIndex - lengths[maxIndex];
  const end: number = maxIndex + lengths[maxIndex];

  return removeHashes(s.substring(start, end + 1));
}

function insertHashes(s: string): string {
  const chars = [];

  for (let i = 0; i < s.length; i++) {
    chars.push('#');
    chars.push(s[i]);
  }
  chars.push('#');

  return chars.join('');
}

function removeHashes(s: string): string {
  return s
    .split('')
    .filter((c) => c !== '#')
    .join('');
}

function findLongest2(s: string, i: number, length: number): number {
  let start: number = i - length - 1;
  let end: number = i + length + 1;
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    length++;
    start--;
    end++;
  }
  return length;
}
