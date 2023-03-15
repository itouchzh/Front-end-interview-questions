package main

import (
	"fmt"
)

func main() {
	var a = [5]int{1, 2, 3, 4, 5}
	b := [5]int{1, 2, 3, 4, 5}
	c := [...]int{1, 2, 3}
	fmt.Printf("a: %v\n", a)
	fmt.Printf("b: %v\n", b)
	fmt.Printf("c: %v\n", c)

	var d [3][5]int
	fmt.Printf("d: %v\n", d)
	e := [3][5]int{}
	fmt.Printf("e: %v\n", e)

	aSlice := []int{1, 2, 3, 4, 5}
	fmt.Printf("%v", aSlice[:3])
	bSlice := make([]int, 5)
	fmt.Printf("bSlice: %v\n", bSlice)

	// 哈希表初始化
	aMap := map[string]int{}
	fmt.Printf("aMap: %v\n", aMap)
	aMap["1"] = 2
	aMap["2"] = 2
	aMap["3"] = 2
	fmt.Printf("aMap: %v\n", aMap)
	bMap := make(map[int]int, 26)
	fmt.Printf("bMap: %v\n", bMap)
	bMap[1] = 1
	for k, v := range aMap {
		fmt.Printf("k: %v\n", k)
		fmt.Printf("v: %v\n", v)
	}
	v, ok := bMap[1]
	fmt.Printf("v: %v\n", v)
	fmt.Printf("ok: %v\n", ok)
	
}
