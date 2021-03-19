package keysandrooms

func canVisitAllRooms(rooms [][]int) bool {
	n := len(rooms)
	queue := make([]int, 0)
	seen := make([]bool, n)

	queue = append(queue, 0)
	seen[0] = true

	for len(queue) != 0 {
		num := queue[0]
		queue = queue[1:]
		room := rooms[num]

		for _, key := range room {
			if !seen[key] {
				queue = append(queue, key)
				seen[key] = true
			}
		}
	}
	for _, v := range seen {
		if !v {
			return false
		}
	}
	return true
}
