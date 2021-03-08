function minimumLengthEncoding(words: string[]): number {
  const wordsIncluded: Set<String> = new Set(words);

  for (const word of words) {
    for (let i = 1; i < word.length; i++) {
      const prefix = word.substring(i);

      if (wordsIncluded.has(prefix)) {
        wordsIncluded.delete(prefix);
      }
    }
  }

  let len = 0;

  wordsIncluded.forEach((word) => {
    len += word.length + 1;
  });

  return len;
}
