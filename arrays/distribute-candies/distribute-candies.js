/**
 * @param {number[]} candyType
 * @return {number}
 */
function distributeCandies(candyType) {
  const n = candyType.length;
  const set = new Set();

  for (const candy of candyType) {
    set.add(candy);
  }

  return Math.min(set.size, n / 2);
}
