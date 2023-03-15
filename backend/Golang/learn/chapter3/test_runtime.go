package main

import (
	"fmt"
	"runtime"
)

func show(msg string) {
	for i := 0; i < 2; i++ {
		fmt.Printf("i: %v\n", i)
	}
}
func main() {
	go show("java")
	for i := 0; i < 2; i++ {
		// 让出协程
		runtime.Gosched()
	}
}


