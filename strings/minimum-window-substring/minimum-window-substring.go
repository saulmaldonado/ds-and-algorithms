package minimumwindowsubstring

import "math"

func minWindow(s string, t string) string {
	n := len(s)

	freq := map[byte]int{}

	for i := range t {
		if _, ok := freq[t[i]]; !ok {
			freq[t[i]] = 0
		}
		freq[t[i]]++
	}

	unique := len(freq)
	left := 0
	right := 0
	count := 0

	minLeft := -1
	minRight := -1
	minLen := math.MaxInt32

	window := map[byte]int{}

	for right < n {
		cur := s[right]

		if _, ok := freq[cur]; ok {
			if _, ok := window[cur]; !ok {
				window[cur] = 0
			}
			window[cur]++

			if freq[cur] == window[cur] {
				count++
			}
		}

		for left <= right && unique == count {
			l := right - left + 1

			if minLeft == -1 || len < minLen {
				minLen = l
				minLeft = left
				minRight = right
			}

			c := s[left]

			if _, ok := freq[c]; ok {
				window[c]--

				if window[c] < freq[c] {
					count--
				}
			}
			left++
		}
		right++
	}

	if minLeft == -1 {
		return ""
	}

	return s[minLeft : minRight+1]

}
