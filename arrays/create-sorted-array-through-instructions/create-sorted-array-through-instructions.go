package createsortedarraythroughinstructions

func createSortedArray(instructions []int) int {
	res := 0
	n := len(instructions)
	mod := int((1e9) + 7)

	c := make([]int, (10e5)+1)

	for i := 0; i < n; i++ {
		min := 0

		lessThan := get(instructions[i]-1, c)
		greaterThan := i - get(instructions[i], c)

		if lessThan <= greaterThan {
			min = (res + lessThan) % mod
		} else {
			min = (res + greaterThan) % mod
		}

		res = min

		update(instructions[i], c)
	}

	return res
}

func get(x int, c []int) int {
	res := 0

	for x > 0 {
		res += c[x]
		x -= x & -x
	}

	return res
}

func update(x int, c []int) {
	for x < 100001 {
		c[x]++
		x += x & -x
	}
}
