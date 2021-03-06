function isBipartite(graph: number[][]): boolean {
  const n: number = graph.length;
  const set: number[] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (set[i] != 0) {
      continue;
    }

    const queue: number[] = [i];
    set[i] = 1;

    while (queue.length > 0) {
      const cur: number = queue.shift()!;
      const node: number[] = graph[cur];

      for (let j = 0; j < node.length; j++) {
        if (set[node[j]] == 0) {
          set[node[j]] = -set[cur];
          queue.push(node[j]);
        } else if (set[node[j]] == set[cur]) {
          return false;
        }
      }
    }
  }
  return true;
}
