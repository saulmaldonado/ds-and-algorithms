function isAlienSorted(words: string[], order: string): boolean {
  const alphabet: number[] = new Array(26);

  const n = order.length;

  for (let i = 0; i < n; i++) {
    alphabet[order.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j == words[i + 1].length) {
        return false;
      }

      let firstChar: number = words[i].charCodeAt(j) - 'a'.charCodeAt(0);
      let secondChar: number = words[i + 1].charCodeAt(j) - 'a'.charCodeAt(0);

      if (alphabet[firstChar] > alphabet[secondChar]) {
        return false;
      }

      if (alphabet[firstChar] < alphabet[secondChar]) {
        break;
      }
    }
  }
  return true;
}
