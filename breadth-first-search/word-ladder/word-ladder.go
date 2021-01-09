func ladderLength(beginWord string, endWord string, wordList []string) int {
	set := make(map[string]bool)

	for _, word := range wordList {
		set[word] = true
	}

	if _, ok := set[endWord]; !ok {
		return 0
	}

	queue := []string{}

	level := 1

	queue = append(queue, beginWord)

	for len(queue) > 0 {
		size := len(queue)

		for i := 0; i < size; i++ {
			chars := []byte(queue[0])
			queue = queue[1:]

			for j := 0; j < len(chars); j++ {
				original := chars[j]

				for c := byte('a'); c <= byte('z'); c++ {
					if original == c {
						continue
					}

					chars[j] = c

					newWord := string(chars)

					if newWord == endWord {
						return level + 1
					}

					if _, ok := set[newWord]; ok {
						queue = append(queue, newWord)
						delete(set, newWord)
					}
				}
				chars[j] = original
			}
		}
		level++
	}
	return 0
}
