package simplifypath

import "strings"

func simplifyPath(path string) string {
	list := []string{}

	for _, dir := range strings.Split(path, "/") {
		if dir == ".." {
			if len(list) > 0 {
				list = list[:len(list)-1]
			}
		} else if dir != "" && dir != "." {
			list = append(list, dir)
		}
	}

	if len(list) == 0 {
		return "/"
	}

	return "/" + strings.Join(list, "/")
}
