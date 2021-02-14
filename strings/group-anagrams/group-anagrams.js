/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const n = strs.length;

  const map = {};
  const res = [];

  for (let i = 0; i < n; i++) {
    const characters = strs[i];
    let key = characters.split('').sort().join('');

    if (!map[key]) {
      map[key] = [];
    }
    const list = map[key];
    list.push(strs[i]);
  }

  const values = Object.values(map);

  for (let i = 0; i < values.length; i++) {
    res.push(values[i]);
  }

  return res;
}

function groupAnagrams2(strs) {
  const map = {};
  const res = [];
  const n = strs.length;

  for (let i = 0; i < n; i++) {
    const freq = new Array(26).fill(0);
    const characters = strs[i];

    for (let i = 0; i < characters.length; i++) {
      freq[characters[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key = freq.join('#');

    if (!map[key]) {
      map[key] = [];
    }

    const list = map[key];
    list.push(strs[i]);
  }

  const values = Object.values(map);
  for (let i = 0; i < values.length; i++) {
    res.push(values[i]);
  }

  return res;
}
