function removePalindromeSub(s: string): number {
  if (!s) {
    return 0;
  }

  let left: number = 0;
  let right: number = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return 2;
    }

    left++;
    right--;
  }
  return 1;
}
