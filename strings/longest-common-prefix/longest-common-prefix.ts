// Time: O(n) (up to the length of the shortest string in the array)
// Space: O(1)
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const currentChar: string = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || currentChar !== strs[j][i]) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}
