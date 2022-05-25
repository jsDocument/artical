# mysql

## mysql安装运行

1. 安装brew install mysql
2. 配置文件
3. 启动服务 brew services start/restart/stop mysql
4. 连接 mysql -D 选择数据库名 -h 主机名 -u name -p +\< script.sql
5. 重设密码 mysqladmin -u root -p pwd

## 导入导出数据 或 执行sql语句


## 查询

1. select [distinct] field / expr as [alais] from [table] where [conditions] group by [field_1] having [group_conditions] order by [field_1] limit [offset, length]
2. from联表(从其他表获取数据)：tbl_1 [tbl_alias] [inner]/left/right join tbl_2 [tbl_alias] on conditions
3. where条件(过滤结果集中的行)：
4. group by(将数据分组，并对每个组应用聚合函数,将一组行记录按列或表达式的值组成摘要记录)：sum, avg, max, min, count
5. having(基于group by子句定义的组筛选组):
6. 子查询
7. 输出字段处理：1: concat_ws('连接符', field_1, field_2)  2. having子句可以使用别名但where不可用：select orderNumber `Order no.` sum () total group by `Order no.` having total > 6000; 3. IFNULL(concat(field_1, '连接符', filed_2), `outField`) as `outField1`
8. 内连表条件(交集)：1. from子句中必须指定出现的主表; 2. 必须指定与主表联接的表, 出现在inner join子句中；3. 需要指定连接条件
9. 左连接(基于左(主)表与其他表匹配)：1. 如果左表与右表不匹配，则返回与右表伪造的行null合并
10. 右连接
11. 自连接：给表取不同的别名，其他用的地方用点来连接该别名和字段名，经常用于两个字段用一个值表示时；如

```mysql
select g.Name as Employee from Employee g, Employee m where g.Salary > m.Salary and m.Id = g.ManagerId;
# 重复数据，过滤重复数据用distinct 或用group by
select count(*) as out_name, field from tbl group by field having out_name >1
# 删除重复数据 也可以用index 或 primary key
```


## 表达式及函数

1. 运算符 + - * / div % mod; &, |, ^, !, +\<<, >>
2. 比较运算 between expr and expr, like % 零个或多个 _单个 escape指定转义字符, in, is, not in, is null, regexp '', =, +\<> 或 !=, +\<, >, +\<=, >= +\<=>;
3. 逻辑运算 and, or, not !, xor
4. 数字函数

  + abs(x), avg(expression), acos(x), cos(x), sin(x), asin(x), tan(x), atant(x), atant2(n, m), cot(x), degrees(x) 弧度转角度 radians(x) 角度转换为弧度 PI()
  + ceil(x), ceiling(x), floor(x), greatest(expr1, ...), least(expr1, ...), truncate(x, y) 保留小数点下y位，不进行四舍五入
  + count(*) max(expression) min(expression), sum(expression)
  + exp(x) e的x次方, pow(x, y), sqrt(x), power(x, y), ln(x), log(x), log2(x), log10(x)
  + rand() 随机数 round(x) 距x最近的整数 sign(x) 返回符号 format(v, n四舍五入保留几位)

5. 字符串函数

  + 截取 right(s, n) 后n个字符, left(s, n), substr(s, start, length), substring(s, start, length), substring_index(s, delimiter, n) s的第n个出现的分隔符delimiter之后的子串[n是正数,n个字符左边的字符串;n是负数,n个字符右边的字符串], mid(s, n, len) 从n位置截取长度为len的子字符串
  + 比较 strcmp(s1, s2) 相等为0， s1>s2为1，小于为-1
  + 去空格 trim(s), rTrim(s), lTrim(s)
  + 转换大小写 upper(s), uCase(s), lCase(s), lower(s)
  + 返回n个字符 space(n), 将字符串s重复n次 repeat(s, n)
  + 拼接 rPad(s1, len, s2) s1结尾添加s2,长度达到len; lPad(s1, len, s2); insert(s1, x, len, s2) s2替换s1, x位置长度为len; concat(s1,s2...); concat_ws(x, s1,s2...) x为分隔符进行拼接
  + 反转 reverse(s)
  + 替换 replace(s, s1, s2) s2代替s中的s1
  + 获取位置 position(s1 in s) 在s中的位置; find_in_set(s1, s2) s2中与s1匹配的字符串的位置; field(s, s1, s2...) s在字符串列表中的位置
  + 长度 char_length(s); character_length(s)
  + ascII(s)

6. 日期函数
  + `年份计算`
  + 返回日期的年 year("date")
  + date("date") time(expression)
  + 返回小时 hour(t)
  + minute(t) second(t)
  + microsecond("date")
  + month("date") monthName("date")
  + 从日期d返回指定的值 extract(type from d)
  + `日期`
  + 返回日期 day("date")
  + 日期是星期几 dayName("date")
  + 日期是本月第几天 dayOfMonth("date")
  + 日期是星期几 dayOfWeek("date") 1星期日
  + 日期是本年第几天 dayOfYear("date")
  + `星期计算`
  + 该年第几个星期 week("date")
  + 日期是星期几 weekday("date") 0是星期一
  + 是该年第几个星期 weekOfYear("date")
  + 返回年份及第几周 yearWeek("date", 0 /1) 0表示周天，1表示周一
  + `日期及时间获取`
  + 当前日期 curDate(), current_date()
  + 当前时间 current_time() curTime()
  + 当前日期时间 current_timestamp() localTime() localTimeStamp() now() sysDate()
  + `日期计算`
  + 0000年1月1日天后的日期 from_days(n天)  距...的天数 to_days("date")
  + 日期加上n天后的日期 addDate("date", n天), addTime("date time", t秒) date_add("date", interval expr type[如:1/interval 5 minute]) data_sub("date", interval expr type[如:1/interval 5 minute])  subTime(t, n秒) subDate("date", n天)
  + d1>d2之间相隔天数 dateDiff(d1, d2)  period_diff(201704, 201701) 月份差值  timeDiff(t1, t2) quarter("date") 返回季节
  + `日期格式` date_format("date", '%Y-%m-%d %r')  str_to_date(string, "%M %d %Y")
  + `组合日期` makeDate(year, day-of-year) makeTime(hour, minute, second)
  + `转换` 以秒为单位转换为时、分、秒的格式 sec_to_time(s)  time_to_sec(t)  time_format(t, '%r')  timeStamp(expression, interval) 返回和

7. using
8. 类型转换 cast('2013-01-01' as DATE)
9. 列位置
11. 类型或进制转换 1. cast(x as type) 2. conv(x, f1, f2) f1变成f2进制 3. charset('') 属于字符集  convert(s using gbk) 转换字符集
12. 返回系统信息 1. connection_id() 服务器连接数 2. database() 当前数据库 3. 当前用户 current_user(), session_user(), system_user(), user() 4. 版本号 version()
13. 条件表达式 1. if(expr, v1, v2) 2. ifNull(v1, v2)  3. isNull(expr) 判断表达式是否为null 4. nullIf(expr1, expr2) 两个字符串相等则返回null, 否则返回expr1  5. coalesce(expr, expr2, ...) 返回第一个非空表达式
14. 最近生成的id last_insert_id()
15. 二进制 bin(x) binary(s) 字符串转换成二进制字符串

```mysql
# 语句块，嵌套关系？
select case
  when cond
  then expr
  when ... then
  else
end

```

: 优先级 (!) > 一元运算(-,~) > (^) > (*/%) > (+-) > (+\<<,>>) > (&) > (|) > (比较运算) > (between, case, when, then, else) > (逻辑运算) > (:=)

## 变量的使用

1. 设置 set @@sql_auto_is_null = 1

## 查看

1. show databases
2. show tables
3. 选择数据库 use db_name

## 创建及修改结构

1. 表 create table [if not exists]  tbl_name (field type field约束 是否自增 默认值 主键, primary key(field, field1) 或 unique(field, field1),[unique] index [idx_name] (field(length))) engine=InnoDB
2. 修改表字段 alter table tbl_name (add field type [after other_field位置] 或 [unique] index idx_name(field) 或primary key (field list)) /(change field new_field new_type)/(drop field)
3. 修改表名 alter table tbl_name rename new_tbl_name; 添加或删除索引 alter table tbl_name add/drop index idx_name; 添加或删了主键 alter table tbl_name modify 字段、类型、约束, alter table tbl_name add primary key(i) / drop primary key
4. 删除 drop table tbl_name
5. 数据库 create database db_name character set gbk
6. 删除数据库 drop database db_name
7. 复制表 1. 获取创建表的语句 show create table 2. 复制显示的sql语句，修改表名并执行 3. 复制表的内容使用 insert into ... select

## 插入、更新及删除

1. insert [ignore] into tbl_name(field,...) values(),(),
2. update tbl_name set filed=v where
3. delete from tbl_name where

```mysql
# 删除重复的邮箱，留下id最小的
delete from Person where Id not in (select id from (select min(Id) as Id from Person group by Email) as temp)
delete p1 from Person p1, Person p2 where p1.Email = p2.Email and p1.Id>p2.Id
```

## 索引---可直接创建删除、修改表结构时更改或创建时指定

1. 创建 create [unique] index idx_name on tbl_name(field(length))
2. 删除 drop index
3. 查看 show index from tbl_name; \G 格式化输出信息

: fulltext 全文索引

## 优化



## 数字类型

1. 整数: tinyint、smallint、mediumint、int、bigint
2. 浮点数: float、double、real、decimal

## 日期和时间: date、time、datetime、timestamp、year

## 字符串类型

1. 字符串: char、varchar
2. 文本: tinytext、text、mediumtext、longtext
3. 二进制(可用来存储图片、音乐等): tinyblob、blob、mediumblob、longblob
