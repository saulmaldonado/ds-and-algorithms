/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack: string, needle: string): number {
  const n: number = haystack.length;
  const m: number = needle.length;

  if (m === 0) {
    return 0;
  }

  const kmp: number[] = getKmp(needle);

  let i: number = 0;
  let j: number = 0;

  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === m) {
      return i - j;
    } else if (i < n && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = kmp[j - 1];
      } else {
        i++;
      }
    }
  }
  return -1;
}

function getKmp(needle: string): number[] {
  const n: number = needle.length;
  const kmp: number[] = new Array(n).fill(0);

  let j = 0;
  let i = 1;

  while (i < n) {
    if (needle[i] === needle[j]) {
      j++;
      kmp[i] = j;
      i++;
    } else {
      if (j !== 0) {
        j = kmp[j - 1];
      } else {
        kmp[i] = 0;
        i++;
      }
    }
  }
  return kmp;
}
