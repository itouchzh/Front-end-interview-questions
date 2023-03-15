package main

import "fmt"

func f1(name string) {
	fmt.Printf("name: %v\n", name)
}

// 高阶函数，将函数作为返回值，执行函数，这里为形参
func f2(name string, f func(string)) {
	f(name)
}

// 闭包, 返回一个函数，函数返回值为int
func add() func(y int) int {
	var x int
	return func (y int) int {
		x += y
		return x
	}
}

func main() {
	// f1("paul")
	f2("tom", f1)

	// 匿名函数
	max := func(a int, b int) int {
		if a > b {
			return a
		} else {
			return b
		}
	}
	r := max(1, 2)
	fmt.Printf("r: %v\n", r)
	f := add()
	r1 := f(10)
	fmt.Printf("r1: %v\n", r1)
}
