package multiplystrings

import (
	"strconv"
	"strings"
)

func multiply(num1 string, num2 string) string {
	n := len(num1)
	m := len(num2)

	prods := make([]int, m+n)

	for i := n - 1; i >= 0; i-- {
		for j := m - 1; j >= 0; j-- {
			n1 := int(num1[i] - '0')
			n2 := int(num2[j] - '0')

			prods[i+j+1] += (n1 * n2)
		}
	}

	p := len(prods)

	carry := 0

	for i := p - 1; i >= 0; i-- {
		temp := (prods[i] + carry) % 10
		carry = (prods[i] + carry) / 10
		prods[i] = temp
	}

	for len(prods) > 0 && prods[0] == 0 {
		prods = prods[1:]
	}

	if len(prods) == 0 {
		return "0"
	}

	res := make([]string, m+n)

	for i := range prods {
		res[i] = strconv.Itoa(prods[i])
	}

	return strings.Join(res, "")
}
