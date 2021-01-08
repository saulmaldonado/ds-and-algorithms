function arrayStringsAreEqual(word1, word2) {
  let i = 0;
  let j = 0;

  for (let a = 0, b = 0; i < word1.length && j < word2.length; ) {
    const currString1 = word1[i];
    const currChar1 = currString1[a++];

    const currString2 = word2[j];
    const currChar2 = currString2[b++];

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
