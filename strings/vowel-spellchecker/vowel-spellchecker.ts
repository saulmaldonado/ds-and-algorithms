function spellchecker(wordlist: string[], queries: string[]): string[] {
  const words: Set<string> = new Set(wordlist);
  const lowered: Record<string, string> = {};
  const noVowels: Record<string, string> = {};

  for (let i = 0; i < wordlist.length; i++) {
    const word: string = wordlist[i];
    const l: string = caseInsensitive(word);
    const e: string = errorVowels(word);

    if (!lowered[l]) {
      lowered[l] = word;
    }

    if (!noVowels[e]) {
      noVowels[e] = word;
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const word: string = queries[i];

    if (words.has(word)) {
      continue;
    }

    const lower: string = caseInsensitive(word);
    const noVowel: string = errorVowels(word);

    if (lowered[lower]) {
      queries[i] = lowered[lower];
    } else if (noVowels[noVowel]) {
      queries[i] = noVowels[noVowel];
    } else {
      queries[i] = '';
    }
  }
  return queries;
}

function caseInsensitive(word: string): string {
  return word.toLowerCase();
}

/**
 *
 * @param {string} word
 * @returns {string}
 */
function errorVowels(word: string): string {
  return word.toLowerCase().replace(/[aeiou]/g, '*');
}
