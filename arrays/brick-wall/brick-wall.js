/**
 * @param {number[][]} wall
 * @return {number}
 */
function leastBricks(wall) {
  const count = {};

  for (let list of wall) {
    let edge = 0;
    for (let i = 0; i < list.length - 1; i++) {
      edge += list[i];

      if (count[edge] === undefined) {
        count[edge] = 0;
      }

      count[edge]++;
    }
  }

  let max = 0;
  for (let key in count) {
    max = Math.max(max, count[key]);
  }

  return wall.length - max;
}
