function groupAnagrams(strs: string[]): string[][] {
  const n: number = strs.length;

  const map: Record<string, string[]> = {};
  const res: string[][] = [];

  for (let i = 0; i < n; i++) {
    const characters: string = strs[i];
    const key: string = characters.split('').sort().join('');

    if (!map[key]) {
      map[key] = [];
    }
    const list: string[] = map[key];
    list.push(strs[i]);
  }

  const values: string[][] = Object.values(map);

  for (let i = 0; i < values.length; i++) {
    res.push(values[i]);
  }

  return res;
}

function groupAnagrams2(strs: string[]): string[][] {
  const n: number = strs.length;
  const map: Record<string, string[]> = {};
  const res: string[][] = [];

  for (let i = 0; i < n; i++) {
    const freq: number[] = new Array(26).fill(0);
    const characters: string = strs[i];

    for (let i = 0; i < characters.length; i++) {
      freq[characters[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key: string = freq.join('#');

    if (!map[key]) {
      map[key] = [];
    }

    const list: string[] = map[key];
    list.push(strs[i]);
  }

  const values = Object.values(map);
  for (let i = 0; i < values.length; i++) {
    res.push(values[i]);
  }

  return res;
}
