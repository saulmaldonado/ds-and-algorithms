package isgraphbipartite

func isBipartite(graph [][]int) bool {
	n := len(graph)
	set := make([]int, n)

	for i := 0; i < n; i++ {
		if set[i] != 0 {
			continue
		}

		queue := []int{}

		queue = append(queue, i)
		set[i] = 1

		for len(queue) > 0 {
			cur := queue[0]
			queue = queue[1:]
			node := graph[cur]

			for _, num := range node {
				if set[num] == 0 {
					set[num] = -set[cur]
					queue = append(queue, num)
				} else if set[num] == set[cur] {
					return false
				}
			}
		}
	}
	return true
}
