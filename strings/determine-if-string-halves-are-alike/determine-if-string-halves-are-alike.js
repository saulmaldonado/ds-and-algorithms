/**
 * @param {string} s
 * @return {boolean}
 */
function halvesAreAlike(s) {
  const n = s.length;

  let first = 0;
  let second = 0;

  let i = 0;
  let j = n / 2;

  while(j < n) {
    if(isVowel(s[i])) {
      first++;
    }

    if(isVowel(s[j])) {
      second++;
    }

    i++;
    j++;
  }

  return first == second;
}

/**
 *
 * @param {string} c
 * @returns {boolean}
 */
function isVowel(c) {
  switch (c.toLowerCase()) {
    case 'a':
      return true;
    case 'e':
      return true;
    case 'i':
      return true;
    case 'o':
      return true;
    case 'u':
      return true;
  }
  return false;
}
