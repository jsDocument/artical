#!/bin/bash

# a="hello shell";
# echo $a;

# 变量与表达式
# 未被赋值的亦是，其值为空，变量也可 "hi, ${a}s" 如此使用，单绰号不会进行变量替换操作
# var1=10
# var2=20
# var3=$[ $var1 + $var2]
# echo The answer is $var3
# # exit 5

# # expr执行算术运算，同名变量不会出错

# var1=10
# var2=20
# var3=`expr $var2 / $var1`
# echo "The result is $var3"


# 内联重定向表达式

# var1=10.45
# var2=43.67
# var3=33.2
# var4=71

# scale 为设置精度

# var5=`bc <<EOF
# scale=4
# a1 = $var1 * $var2
# b1 = $var3 * $var4
# a1 + b1
# EOF
# `
# echo The final answer for this mess is $var5

# 方括号运行数学表达式

# var1=10
# var2=50
# var3=45
# var4=$[$var1 * ($var2 - $var3)]
# echo 'The final result is '$var4

# # 反引号当作命令来执行
# testing=`date`
# echo "The date and time are:$testing"

# # bc 精度
# echo "scale=2;3/8" | bc

# # 二进制转为十进制
# abc=192
# echo "obase=2;$abc" | bc

# # 十进制转为二进制
# abc=11000000
# echo "obase=10;ibase=2;$abc" | bc

# # 平方根，是否还有其他函数？
# echo "10^10" | bc
# echo "sqrt(100)" | bc

# # 函数----命令
# echo The time is:
# date
# echo The one who has been logged is:
# who

# # 系统变量
# echo "User info fro userId:$USER"
# echo UID:$UID
# echo HOME:$HOME
# #换行
# echo -e '\n'
# echo 'The cost of the item is \$15'

# # 日期作为文件名
# today=`date +%y%m%d`
# ls /usr/bin -al > log.$today

# # 路径写成字符串与非字符串的区别？
# exec 3>&1


# # env 显示用户环境区中的变量及其取值；set 显示本地数据区和用户环境区中的变量及其取值；unset 删除指定变量当前的取值，该值将被指定为NULL；export 将本地数据区中的变量转移到用户环境区。

# # 如何接收外部参数，支持什么参数类型：$#参数个数，$0脚本名，$1第一个，${10}，$*整个参数列表，表达式在中括号内，表达式中的被判断的变量用""括起来
# # 中括号与表达式之间要有空格

# if [ $# -lt 3 ]; then
#   echo $1;
# else
#   exit 0;
# fi

# # 判断：-f "$var" 是否为文件，-x "$var" 是否有可执行权限，-n "$var" 是否有值，-z "$var" 是否为空，"$var" = "$var1" 是否相等，cond1 -a/o cond2 多条件逻辑判断 && ||

# # shift
# # ren

# # for((cond1; cond2; cond3)) do
# # while, until

# for file in $*; do

# done

# case var in
# pattern 1)
# ... ;;
# esac

# getopts

# select var in list; do
#done


# 函数

# 命令放在 `cmd`

# 目录文件
logs=( "./" "../" "../../")
for file in "${logs[@]}"
do
	echo $file
  cd $file
  ls -l
done
