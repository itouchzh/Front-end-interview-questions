# Git

## 常用指令

``` git
设置远程仓库位置
git remote rm origin
git remote add origin [url]

git add . 添加到暂存区

git commit -m ""  添加注释推送到本地仓库
git push origin master 将本地项目提交到服务器中
git push [远程仓库名][分支名] 将本地项目提交到某个分支

git branch -a 
git branch -r
git commit -am ""
git remote show origin 显示远程库origin里面的资源
git checkout --track origin/dev 切换到远程仓库的dev分支
git checkout -b dev 新建一个本地的dev分支
git checkout dev 切换到本地的dev分支
git merge origin/dev 将远程dev分支与当前分支合并

git rm [file name] 删除文件


```
