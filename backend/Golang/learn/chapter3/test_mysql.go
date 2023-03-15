package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)
var db *sql.DB

func initDB()(err error)  {
	dsn := "root:123@tcp(127.0.0.1:3306)/springdb?charset=utf8mb4&parseTime=True"
	db, err = sql.Open("mysql", dsn)
	if err!= nil{
		return err
	}
	err = db.Ping()
	if err!= nil{
		return err
	}
	return nil
}
func main() {
	// db, err := sql.Open("mysql", "root:123@/springdb")
	// if err != nil {
	// 	panic(err)
	// }
	// // See "Important settings" section.
	// // 获取db指针打印
	// fmt.Printf("db: %v\n", db)
	// db.SetConnMaxLifetime(time.Minute * 3)
	// db.SetMaxOpenConns(10)
	// db.SetMaxIdleConns(10)
	err := initDB()
	if err != nil{
		fmt.Printf("err: %v\n", err)
	}else {
		fmt.Print("连接成功")
	}
}
