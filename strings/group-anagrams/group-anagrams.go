package groupanagrams

import (
	"sort"
	"strings"
)

func groupAnagrams(strs []string) [][]string {
	mp := map[string][]string{}
	res := [][]string{}

	for _, str := range strs {
		characters := strings.Split(str, "")

		sort.Strings(characters)

		key := strings.Join(characters, "")

		if _, ok := mp[key]; !ok {
			mp[key] = []string{}
		}

		list := mp[key]
		mp[key] = append(list, str)
	}

	for _, list := range mp {
		res = append(res, list)
	}

	return res
}

func groupAnagrams2(strs []string) [][]string {
	mp := map[string][]string{}
	res := [][]string{}

	for _, str := range strs {
		charFreq := make([]int, 26)

		for _, c := range []byte(str) {
			charFreq[c-'a']++
		}

		keyBuilder := []byte{}

		for _, n := range charFreq {
			keyBuilder = append(keyBuilder, byte(n))
			keyBuilder = append(keyBuilder, '#')
		}

		key := string(keyBuilder)

		if _, ok := mp[key]; !ok {
			mp[key] = []string{}
		}

		list := mp[key]
		mp[key] = append(list, str)
	}

	for _, list := range mp {
		res = append(res, list)
	}

	return res
}
