package main

import "fmt"

func main() {
	var (
		name string
	)
	name = "paul"
	fmt.Printf("name: %v\n", name)

	// 切片
	test()
	mapTest()
}

// 切片
func test() {
	// 声明切片
	var s1 []int
	var s2 []string
	var s3 = make([]int, 3)
	fmt.Printf("s1: %v\n", s1)
	fmt.Printf("s2: %v\n", s2)
	fmt.Printf("s2: %v\n", s3)

}

// map
func mapTest() {
	m1 := make(map[string]string)
	m1["name"] = "tom"
	m1["email"] = "gmail.com"
	for _, v := range m1 {
		fmt.Printf("v: %s\n", v)
	}

}
