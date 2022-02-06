
## 查看文件权限

1. ls -l
2. sudo -s

## 修改 chmod r---4, w---2, x----1

1. chmod 【选项】 (目标人员+操作)权限值  目录
2. u所有者，群组，o其他，a全部

:形式

## 组

如何查看组成员？
1. grep 'group' /etc/group ---gid
2. grep '1003' /etc/passwd ---组用户
3. awk -F ":" '{print $1"\t\t"$4}' /etc/passwd | grep 'gid' 用:号分隔打印第一与第四列

(添加/删除)组成员 ？


## 更改文件所有者，所属群组

1. chown 【选项】user 目录

