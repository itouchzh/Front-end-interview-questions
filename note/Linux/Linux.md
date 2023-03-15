# Linux

## 1.Vim

```
vim有三种模式：编辑模式，一般模式和命令模式。
编辑：按下i，I,o, O等任意一个按键进入编辑模式 esc回到一般模式，：进入命令模式
编辑完以后按下：esc键，然后:wq退出保存
:wq 退出保存 :q退出不保存，:q!强制退出
快捷键：
1、拷贝当前行 yy， 拷贝当前行向下5行， 5yy
2、粘贴 p
3、删除当前行 dd，删除当前行向下5行，5dd 删除所有行：%d 撤销 u
4、查找，命令模式下输入/关键字+Enter，输入n查找下一个
5、设置行号 命令模式下，:set nu 和:set nonu
6、编辑文件，快速定位末行，一般模式下gg,快速定位到首行，一般模式下G
7、光标快速定位到某行，一般模式下，输入行号+shift+g
```

![image-20230211170138321](C:\Users\kissber\AppData\Roaming\Typora\typora-user-images\image-20230211170138321.png)

## 2.文件

``` 
pwd:当前绝对路径
ls:查看目录 ls -a :查看所有文件包括隐藏文件 ls -l 以列表方式显示信息
cd ~: 返回到家目录
mkdir 创建目录 mkdir -p a/b/c 创建多级目录
rmdir 删除空目录
rm -rf强制递归删除
tough 创新空文件
cp [-r] source dest 复制 \cp强制覆盖
mv oldName newName 移动文件或者重命名
cat -n 查看内容不能修改带行号 | more
more 文件 查看文件 space:向下翻页 enter向下一行 q立即离开more ctrl+F 向下滚动一屏 Ctrl+B 返回上一屏幕 =：当前行号
:f 输出文件名和当前行号
less 文件 查看文件 space/pagedown向下翻页 pageup向上翻页 /字符 向下搜索，按n向下查找，按N向上查找，q离开
history 查看
find 查找文件
grep -n 显示行号  grep [选项] 查找内容 源文件
tar [选项] xxx.tar.gz -c 产生.tar打包文件 -v 显示详细信息 -f 指定压缩后的文件名 -z打包同时压缩 -x 解包.tar文件
```

## 3. 指令

```js
df -h 磁盘情况查询
du -h 查询指定目录磁盘占用情况
ps -aux 查看系统进程
ps -aux | grep 名称 具体查看
ps -ef 显示当前所有进程
kill -9 PID 强迫进程立即停止
pstree [] 查看进程树  说明：-p: 显示进程PID, -u：显示进程所属用户
top 动态监控进程 说明： -d 显示秒数 -p 通过监控进程ID  按下： P以CPU的使用率排序；M:以内存使用率排序；N按照PID排序，q退出
netstat [] 查看网络状态 说明： -an 按照顺序排序输出 -P 显示哪个进程在调用

```

## 4. shell

```
1. 以#!/bin/bash开头
使用 sh + 文件名执行

```

