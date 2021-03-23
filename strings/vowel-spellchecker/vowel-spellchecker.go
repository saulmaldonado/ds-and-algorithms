package vowelspellchecker

import (
	"regexp"
	"strings"
)

func spellchecker(wordlist []string, queries []string) []string {
	words := make(map[string]bool)

	for _, w := range wordlist {
		words[w] = true
	}

	lowered := make(map[string]string)
	noVowels := make(map[string]string)

	for _, w := range wordlist {
		l := caseInsensitive(w)
		e := errorVowels(w)
		if _, ok := lowered[l]; !ok {
			lowered[l] = w
		}
		if _, ok := noVowels[e]; !ok {
			noVowels[e] = w
		}
	}

	for i := range queries {
		word := queries[i]

		if _, ok := words[word]; ok {
			continue
		}

		lower := caseInsensitive(word)
		noVowel := errorVowels(word)

		if _, ok := lowered[lower]; ok {
			queries[i] = lowered[lower]
		} else if _, ok := noVowels[noVowel]; ok {
			queries[i] = noVowels[noVowel]
		} else {
			queries[i] = ""
		}
	}
	return queries
}

func caseInsensitive(word string) string {
	return strings.ToLower(word)
}

func errorVowels(word string) string {
	pattern := regexp.MustCompile("[aeiou]")
	return pattern.ReplaceAllString(strings.ToLower(word), "*")
}
