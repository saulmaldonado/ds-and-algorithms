/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
  const n = rooms.length;
  const queue = [];
  const seen = new Array(n);

  queue.push(0);
  seen[0] = true;

  while (queue.length) {
    const num = queue.shift();
    const room = rooms[num];

    for (const key of room) {
      if (!seen[key]) {
        queue.push(key);
        seen[key] = true;
      }
    }
  }

  for (const v of seen) {
    if (!v) {
      return false;
    }
  }
  return true;
}
