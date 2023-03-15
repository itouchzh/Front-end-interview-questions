package main

import (
	"chapter2/user"
	"fmt"

	// "math/rand"
	"strings"
)

func main() {
	s := user.Hello()
	fmt.Printf("s: %v\n", s)
	// var a int
	// var b int32
	// a = 15
	var c bool = false
	fmt.Printf("c: %v\n", c)
	// count := 10
	// for i := 0; i < count; i++ {
	// 	a := rand.Int()
	// 	fmt.Printf("%d / ", a)
	// }

	// 字符串常用方法
	var str string = "Hello World"
	var res = strings.Count(str, "H")
	fmt.Printf("%d\n", res)

	var lower = strings.ToLower(str)
	var upper = strings.ToUpper(str)
	fmt.Printf("%s\n", lower)
	fmt.Printf("%s\n", upper)

}
