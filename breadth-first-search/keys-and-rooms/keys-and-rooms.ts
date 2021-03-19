function canVisitAllRooms(rooms: number[][]): boolean {
  const n: number = rooms.length;
  const queue: number[] = [];
  const seen: boolean[] = new Array(n).fill(false);

  queue.push(0);
  seen[0] = true;

  while (queue.length) {
    const num: number = queue.shift()!;
    const room: number[] = rooms[num];

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
