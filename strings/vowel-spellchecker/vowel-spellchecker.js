/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
function spellchecker(wordlist, queries) {
  const words = new Set(wordlist);
  const lowered = {};
  const noVowels = {};

  for (let i = 0; i < wordlist.length; i++) {
    const word = wordlist[i];
    const l = caseInsensitive(word);
    const e = errorVowels(word);

    if (!lowered[l]) {
      lowered[l] = word;
    }

    if (!noVowels[e]) {
      noVowels[e] = word;
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const word = queries[i];

    if (words.has(word)) {
      continue;
    }

    const lower = caseInsensitive(word);
    const noVowel = errorVowels(word);

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

/**
 *
 * @param {string} word
 * @returns {string}
 */
function caseInsensitive(word) {
  return word.toLowerCase();
}

/**
 *
 * @param {string} word
 * @returns {string}
 */
function errorVowels(word) {
  return word.toLowerCase().replace(/[aeiou]/g, '*');
}
