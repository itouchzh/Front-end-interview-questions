package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

var db *sql.DB

func initDB() (err error) {
	dsn := "root:123@tcp(127.0.0.1:3306)/springdb?charset=utf8mb4&parseTime=True"
	db, err = sql.Open("mysql", dsn)
	if err != nil {
		return err
	}
	err = db.Ping()
	if err != nil {
		return err
	}
	return nil
}

// 插入数据
func insertData() {
	sqlStr := "insert into student(name, age) values(?, ?)"
	ret, err := db.Exec(sqlStr, "tom", 12)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		return
	} else {
		theID, _ := ret.LastInsertId()
		fmt.Printf("theID: %v\n", theID)
	}

}

// 定义查询结构体
type Student struct {
	id   int
	name string
	age  int
}

// 查询数据,一个
func queryOneRow() {
	s := "select * from student where id = ?"
	var u Student
	// 传入参数1
	err := db.QueryRow(s, 1).Scan(&u.id, &u.name, &u.age)
	if err != nil {
		fmt.Printf("err: %v\n", err)
	} else {
		fmt.Print("查询成功")
		fmt.Printf("u: %v\n", u)
	}
}

// 查询多个数据
func queryManyRow() {
	s := "select * from student"
	var u Student
	// 传入参数1
	rows, err := db.Query(s)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		return
	}
	defer rows.Close()
	// 读取数据
	for rows.Next() {
		err2 := rows.Scan(&u.id, &u.name, &u.age)
		if err2 != nil {
			fmt.Printf("err2: %v\n", err2)
			return
		}
		fmt.Printf("u: %v\n", u)
	}
}

// 更新数据
func updataData() {
	sqlStr := "update student set name = ?, age = ? where id = ?"
	r, err := db.Exec(sqlStr, "张三丰", 123, 1)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		return
	}
	i, err2 := r.RowsAffected()
	if err2 != nil {
		fmt.Printf("err2: %v\n", err2)
		return
	}
	fmt.Printf("更新成功，更新的行数为：i: %v\n", i)
}

// 删除数据
func deleteData() {
	sqlStr := "delete from student where id = ?"
	r, err := db.Exec(sqlStr, 4)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		return
	}
	i, err2 := r.RowsAffected()
	if err2 != nil {
		fmt.Printf("err2: %v\n", err2)
		return
	}
	fmt.Printf("删除成功行数为：i: %v\n", i)
}

func main() {
	err := initDB()
	if err != nil {
		fmt.Printf("初始化数据库失败,err: %v\n", err)
	} else {
		fmt.Printf("初始化数据库成功\n")
		// insertData()

	}
	// queryOneRow()
	// queryManyRow()
	// updataData()
	deleteData()
}
