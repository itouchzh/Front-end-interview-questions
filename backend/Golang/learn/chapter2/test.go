package main

import (
	"fmt"
	"strings"
)

func main() {
	var str string = "Hello"
	fmt.Printf("str: %v\n", str)
	var s = "Hello World!"
	var res = strings.Count(s, "Hel")
	fmt.Printf("res: %v\n", res)
}
