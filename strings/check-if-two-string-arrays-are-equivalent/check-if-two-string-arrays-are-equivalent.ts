function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let i: number = 0;
  let j: number = 0;

  for (let a = 0, b = 0; i < word1.length && j < word2.length; ) {
    const currString1: string = word1[i];
    const currChar1: string = currString1[a++];

    const currString2: string = word2[j];
    const currChar2: string = currString2[b++];

    if (currChar1 !== currChar2) {
      return false;
    }

    if (a === currString1.length) {
      a = 0;
      i++;
    }

    if (b === currString2.length) {
      b = 0;
      j++;
    }
  }

  return i === word1.length && j === word2.length;
}
