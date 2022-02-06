## 进入mysql命令行

1. brew services start mysql
2. mysql -u root
3. 远程：mysql -h host -p port -u root -p pwd
4. mysql --skip-grant-tables 跳过权限验证

## 常用查询

show processlist 正在运行的线程
show variables
select database() 当前数据库
select now(), user(), version() 当前时间、用户、版本

怎么样保存上一句查找结果？

## 用户变量----作用域为整个会话 或 在过程中为局部变量赋值

set @varName = expr, ...    不加前缀，默认为会话变量
select @varName:=(select) 或 set @varName=(select)

show session variables 显示会话变量
show global variables 显示全局变量

set session varName=value 或 set @@session.varName=value

select @@session/global.varName 查询值

: @@session 或以用 @@local代替

## 存储过程变量----会默认初始化为null

declare varName type default 0

## 拾贝

1. do sleep(5)

## select [all | distinct] select表达式 from, where, group by, having, order by, limit

## select 表达式
1. *
2. 计算公式、函数调用、表达式，聚合函数：count, sum, avg, max, min（在select 的返回字段中）
3. field 或用 as 使用别名
4. ifnull(exp1, exp2), if(expr, exp1, exp2), coalesce()

## where 语句可用的关键表达式 与 函数(子句)，字段必须是数据表存在的，不可以是别名，不可以聚合函数
1. in / not in()
2. (not) like "%_"
3. is null
4. is not true / false / unknown
5. (not) between and
6. and, or, xor
7. =, <=>, <>, !=, <=, <, >=, >, !, &&, ||
8. 可以用子句，子句返回聚合的数据，然后再筛选

## having子句，结果再次筛选，字段必须是筛选出来的，可以是别名

## 与case语句一起

select case v when expr then exp1 else exp2 end;

## 补充限定

1. order by field desc / asc

## 类型

1. 整形
tinyint
smallint
mediumint
int(M)
bigint

2. 浮点型
float(M, D)
double(M, D)

3. 定点数
decimal(总位数，小数点位数)

4. 字符串
char
varchar

- 二进制
blob
text

- binary, varbinary


5. 日期

  - datetime  “YYYY-MM-DD hh:mm:ss”
  - date   “YYYY-MM-DD”
  - times  tamp  “YY-MM-DD hh:mm:ss”
  - time    “hh:mm:ss”
  - year   “YYYY”

6. 枚举

  - enum()
  - set()






## 定义 create, alter, drop

- 数据库

1. 创建 create {database | schema} [if not exists] db_name default character set =
2. 选择 use db_name
3. 修改 alter {database | schema} [db_name] default charracter set gb2312 default collate ... 字符集和校对规则
4. 删除 drop  {database | schema} [if exists] db_name
5. 查看 show {databases | schemas} [like 'pattern' | where expr]

- 表

1. create [temporary] table tbl_name(
  field type [列级完整性约束] [default value]----int double bool (long) date timestamp time char varchar NULL; float
  [表级完整性约束]:
  primary key(field, field...)
  [unique] index idx_name(feild...)
  foreign key(field)
  reference other_tbl_name(field)
       on delete restrict
       on update restrict
)[engine=]
2. 修改 alter table tbl_name 【add column | change column | alter column | modify column | drop column | rename To db.tbl_name】.... change可以修改表名、类型、约束；alter修改默认值；modify 修改类型
  First, after field 定义列的位置
  添加索引 add [unique | primary | foreign] index|key idx_name(idx_col_name,...)
  删除索引 drop primary key
  drop index idx_name
  drop foreign key

```sql
alter table forTest.S_C add foreign key(Cno) references forTest.C(Cno) on delete cascade on update cascade;
alter table forTest.S change column Sname char(30);
```

3. 重命名 rename table tbl_name TO new_tbl_name
4. 删除 drop table ... [restrict | cascade]
5. 查看表 show [full] tables [from | in] tbl_name
6. 查看表结构 show [full] columns [from | in] tbl_name [like 'pattern' | where expr] 或 desc db.tbl_name
7. show table status from databases 数据库管理系统性能及统计信息

- 列

1. show columns from tabName



- 索引 index, unique, primary key

1. create [unique] index idx_name on tbl_name (idx_col_name(length) asc/desc,...) 索引在表中的名称是唯一的，索引列的描述
2. 查看 show {index | indexes | keys} {from | in} tbl_name {from | in} db_name [where expr]
3. 删除 drop index idx_name ON tbl_name

## 操纵 select, insert, update, delete

- 插入

1. insert into tbl_name [(col_name,...)省略为全部] {values | value} ({expr | default},...) (...);
2. insert into tbl_name SET col_name={exprr | DEFAULT}, ...
3. insert into tbl_name [(col_name,...)] SELECT 将查询数据插入到另一个表中

- 删除

1. delete from tbl_name [where condition] [order by ...] [limit n] 删除一行或多行数据

- 更新

1. update tbl_name SET col_name={expr | DEFAULT}, ... [where condition] [order by ...] [limit n]

- 查询

1. select [all|distinct去除重复行] field/select_expr,... 如：*, field as new_name
   from tbl_references
   where
   group by
   having
   order by
   limit

2. select_expr: 可以是聚合函数 count, max, min, sum, avg, std标准值, variance方差, group_concat 一组列值组合而成的结果, bit_and, bit_or, bit_xor 异或

```sql

select field + v

select field
case
when condition then 'value'
else 'value2'
end [as] new_name
```

3. from 多表连接查询

  - 交叉----tbl cross join tbl2 或逗号分隔 结果是乘积；
  - 内连接----tbl {inner join | join} tbl2 ON condition 消除交叉连接中的某些行，自连接：查找相同列值的行时用（表与自身连接）
  - 外连接----基表和参考表，以基表为依据返回满足和不满足条件的记录，{left outer join | left join} 与关键字的右边表进行匹配, null表示右表没有找到与左表相符的记录；{right outer join | right join} 右表为基表 on condition

4. where
  - 比较运算 <>, !=, <=>
  - 范围 expr [not] between expr1 and expr2； expr IN (list)
  - 空值 expr IS [NOT] NULL
  - 子查询 expr [not] IN (select...)；expr 比较运算 {ALL | SOME | ANY} (select...)；exist (select...)
5. group by 根据选择的列的值进行逻辑分组 {col_name `select列中的项`|expr`通常与聚合函数一起使用`|position`select 结果集中的位置`} [asc|desc], ... [WITH ROLLUP`汇总行`] 条件不可以是聚合函数
6. having 对分组再进行过滤，可以是聚合函数
7. order by {col_name | expr | position `select结果集中的位置`} [asc|desc], ... 升序、降序，空值最小
8. limit {[offset,] row_count | row_count OFFSET offset}

- 数据安全性与一致性

1. 实例完整性约束-----主键，如果是一个字段，则可以定义为列或表完整性约束，如果是多个字段，必须为表完整性约束；一个表一个。
2. 实例完整性约束-----候选键，唯一且不为NULL，unique 键，unique索引。
3. 参照完整性约束-----列上添加references，表上添加foreign key(col_name, ...`被参照表中的主键或候选键`) references
4. restrict 拒绝对被参照表的删除和更新操作；cascade 被参照表更新，则更新参照表中匹配的记录；set NULL  被参照表更新，则更新参照表对应外键为NULL, no action 同restrict。
5. 触发器----完善主键与外键不能保证的复杂的参照完整性
6. 用户自定义完整性----NOT NULL 或 check(expr)
7. 命名完整性约束----- constraint [symbol]

```sql
alter table tbl_name add foreign key (col_name)
references other_tbl_name (idx_col_name(length) asc/desc, ...)
  on delete {restrict | cascade | set NULL | no action}


create trigger t_name t_time t_event ON tbl_name for each row t_body
t_time---before/after
t-event---insert/update/delete
t_body----多行用begin...end；单行SET @var="value"
insert----NEW.field来访问被插入的数据
delete----OLD.field访问之间的值
update----可以访问NEW及OLD


drop trigger [if exists] [schema_name.]t_name
```

- 视图

1. 创建 create view v_name [(col_list)] AS select_statement [with [cascaed|local `检查所有或当前视图`] check option `修改时需要符合select`]
2. drop view [if exists] v_name,...[restrict | cascade]
3. alter view v_name [(col_list)] AS select_s ...
4. show create view v_name
5. insert into v_name values (...)
6. update v_name set field=''
7. delete from v_name where ...

## 控制 grant, revoke

- 账户

1. create user u_name[identified by [PASSWORD] 'password']------要有insert、全局create user权限，需要在mysql的user表中插入一条数据，新用户只有show权限。
2. select PASSWORD(456) 查询其对应的散列值
3. drop user u_name@host----要有delete、全局create user权限
4. rename user old_u_name To new_user,[...]----要有update、全局create user权限
5. 修改口令----set password [FOR user@host]={PASSWORD('new_pwd') | 'pwd'`已加密的口令`}

- 权限

1. 查看show grants for 'u_name'
2. 授权：grant {select|upate|delete|create user...[(col_list)],...}  ON {db_name|tbl_name} [level 列、表、库、用户权限] TO u_name [identified BY [PASSWORD] 'pwd'][with grant option `把自己所有权限授于其他用户`]
3. 当前库所有表：*，所有库的所有表：*.*，db_name.*库中所有表，db_name.tbl_name/v_name，db_name.func_name
4. revoke {select|upate|delete|create user...[(col_list)],...}  ON {db_name|tbl_name} from 'user@host'
5. 刷新权限 flush privileges
6. 所有权限：

  1. Alter 　　修改表和索引
  2. Create 　创建数据库和表
	3. Delete 　删除表中已有的记录
	4. Drop 　　 抛弃（删除）数据库和表
	5. INDEX 　创建或抛弃索引
	6. Insert 　 向表中插入新行
	7. REFERENCE 　　未用
	8. Select　　　　 检索表中的记录
	9. Update 　　　　 修改现存表记录
	10. FILE 　　　　　　读或写服务器上的文件
	11. PROCESS 　　 查看服务器中执行的线程信息或杀死线程
	12. RELOAD 　　　　重载授权表或清空日志、主机缓存或表缓存。
	13. SHUTDOWN　　 关闭服务器
	14. ALL 　　　　　　所有；ALL PRIVILEGES同义词
	15. USAGE 　　　　特殊的“无权限”权限

## 备份与恢复数据

- select * into outfile 'file_name' export_options | into dumpfile 'file_name  紧挨着
- load data infile 'file_name' into table tbl_name load_option

```sql
fields
  terminated by 'string' ----字段间的符号
  optionally enclosed by 'char'----optionally表示所有的值都放在双引号之间；字符值放在双引号之间
  escaped by 'char'------转义字符
lines terminated by 'string'------备份时行结束标志
lines starting by 'string'--------行前缀与后缀
      terminated by 'string'
```



## 常用操作

1. 操作之前判断 if not exists, 如 create table if not exists user
2. 更改编码类型：CHARACTER SET  指定字符集

## 查看当前所在
1. 数据库
1. 帐户

## 数据库

1. 启动：bash mysql.server start
2. 用户登录【交互模式】：Mysql -u root -p passwd；【命令模式】：mysql -p pwd -e "查询命令或其他命令"；【批处理模式】：more xxx.sql 或 source xxx.sql 或 mysql -u xxx -p xxx < xxx.sql
3. 连接远程数据库服务器：mysql  - D 所选择数据库名  -h 主机名 -u 用户名 -p 密码
4. 查看：show databases
5. 创建建：create database name
6. 启用：use databaseName 或 \u databaseName
7. 删除：Drop database databaseName
8. 备份：mysqldump -u root -p 数据库名>url/xxx.sql
9. 恢复：mysql -u root 新数据库名<xxx.sql
10. 执行外部sql：mysql -u root -p --source xxx.sql 或 source xxx.sql

## 表

- 基础操作
1. 查看：Show tables;
2. 创建：Create table Tname (fieldName type description , fieldName…)
3. 插入：Insert into tableName ([fieldName, …]) values (v1,…)
4. 删除：Drop table Tname 或 Delete from Tname 。。。
5. 修改：Alter table tableName rename newTableName
6. 通过脚本文件创建表：mysql -D databaseName -u userName -p < createtable.sql
7. 创建时字段描述：类型[(长度)] 索引 自增 默认值(int unsigned primary key auto_increment unique not null default '')

## 修改表结构：
1. add 字段 类型；删除 drop column 字段；更名或其他描述：change old字段名 new字段名 iteger；add index 索引名 (字段名, ...)
2. 修改字段描述：alter table table_name modify column field type;
3. alter table note drop primary key; alter table note modify cloumn note_id auto_increment; alter table note add primary key(note_id);
4. 1 SELECT auto_increment FROM information_schema.tables where table_schema="dbName" and table_name="tableName";
5. alter 中使用 modify 与 change：alter table user change old_field new field integer
6. add：alter table user add new_field 描述; add primary key(field);

- 修改表结构
1. 添加字段：alter table tableName add fieldName  type after fieldName
2. 修改字段名：alter table tableName change newFieldName NewType
3. 删除字段：Alter table tableName drop fieldName
4. 创建表时与另一表有相同字段：foreign key (fieldName) references 表名 (fieldName);

## 字段
1. 查询 desc 表名

## 表数据
1. 插入：insert into tableName (fieldName,...) (values...)
2. 更新；update tableName set fieldName = v, ... where condition
3. 删除：delete from 表名 where condition


常用常量：
NULL default

查询：
Select fieldName, …   from tableName where 运算

更新：
update tableName set  fieldName = v  where 运算

删除：
delete from tableName where 运算

## 主键，外键，关联
1. 主键：标识一条记录，不可重复或空；保证数据完整性。
2. 外键：另一个表的主键，可以空或重复，建立与其他表的联系。主键值修改，关联的数据也同步更新；保证了一致性。
3. alter table 表名 add promary key 字段名/ constraint `外键名` foreign key 字段名 references 另一个表 (字段) / index (字段名)
4. 对外键关联操作的定义：on delete cascade on update cascade; 或 on delete no action on update no action;
5. 删除外键：alter table tableName drop foreign key `外键名`
6. 取消外键：set foreign_key_checks = 0;

## 数据类型

- 数字类型
  1. 整数: tinyint、smallint、mediumint、int、bigint
  2. 浮点数: float、double、real、decimal
- 日期和时间: date、time、datetime、timestamp、year
- 字符串类型
  1. 字符串: char、varchar
  2. 文本: tinytext、text、mediumtext、longtext
- 二进制(可用来存储图片、音乐等): tinyblob、blob、mediumblob、longblob
- 对类型的描述：unsigned, signed
- Set, Enum类型
- 修改字段类型：set foreign_key_checks = 0; alter table user modify column user_id bigint;set foreign_key_checks = 1;

## 变量

- 用户变量(会话变量)，声明：SET @标识符 = v；
  1. 在查询中使用：select @标识符
  2. 在查询语句中进行赋值：select @标识符 := max(age) from student
  3. selct @@标识符

- 查看所有系统变量
  - show variables;

- 修改变量： set variable_name = new_name  , global关键字为永久修改

## 帐户，是多用户数据库，访问mysql.user

1. 数据库mysql
2. 相关数据表：user, db, host, tables_priv, columns_priv, procs_priv...
3. user存储包含：用户信息(主机%、用户名、密码)，权限_priv，安全ssl_，资源分配max_
4. 可以select, insert, alter相关的权限表：table_priv, column_priv, procs_priv
5. 查询：select user from mysql.user
6. 创建：create user user_name[@hostname] [identified by 'password']
7. 删除：drop user 'username'@'hostname'
8. 更新密码：set password for 'username' = password('password') 或 = ‘password’ 或 update user set password = password('password') where user="username"
9. delete from mysql.user where user="username"
10. 更新密码：update mysql.user set password=password('1111') where user = 'root';
  或 修改当前用户密码 set password=password('1111');
  或set password for '用户名'@'主机名' = password=password('1111')

- 权限
  1. 权限分为：ALL PRIVILEGES、CREATE、ALTER、INSERT、UPDATE、DELETE、SELECT
  2. 创建用户并设置权限：grant 权限值, (select,insert,update,delete) on 数据库名.表 to 'username'@'hostname' [identified by 'password']
  3. 对账户进行权限增加：grant 权限值, ... on 数据库名. to username1, username2... with grant option
  4. 刷新权限：flush privileges
  5. 回收权限：revoke privilege 权限值, ... on 数据库名.表 from 'username'@'hostname'
  6. 权限有：select ,update,delete,insert(表数据)、create,alert,drop(表结构)、references(外键)、create temporary tables(创建临时表)、index(操作索引)、create view,show view(视图)、create routine,alert routine,execute(存储过程)、all,all privileges(所有权限)
  7. 查看权限：show grants 或 show grants for username@主机名称

- 如何使用：
  1. information_schema>[table]: user_privileges
  2. mysql>[table]: tables_priv / columns_priv
  3. select * from mysql.columns_priv where user='' and host=''


```sql
# % 表示任意主机，.表示数据库中所有都授权
GRANT ALL PRIVILEGES ON test.* TO 'semon'@'%' IDENTIFIED BY 'semon';
GRANT CREATE ON test.* TO demon WITH GRANT OPTION;
```

## 性能

1. 开启时间监测：set profiling = 1;
2. 查看检测结果：show profiles;

## 索引：提高了查询速度，但降低更新表的速度，因更新时需要保存数据，同时保存索引文件，会占磁盘空间

1. 创建：create index 索引名称 on 表名(字段名(长度))
2. 查看：show index from 表名
3. 删除：drop index 索引名 on 表名
4. 普通、唯一、全文索引；主键、外键

## 关联(外键关系)
1. foreign key(user_id) references user(user_id)

## 函数/存储过程

- 创建函数，创建后会存到表中
  1. create function `function_name`(param type, ...) returns return_type  下面是 begin 函数体语句; return v; end
  2. 临时变量声明：delare 变量名 变量类型 [default v]
  3. 临时变量赋值：set 变量名 = 表达式, ...
  4. delimiter 标识符
  5. 使用：select field from databaseName where name = 'function_name';  select function_name();
  6. 删除函数：delete from database where name='function_name'
  7. 循环：while 条件 do 循环体; end while;
  8. 条件：if 条件 then 语句; end if; (判断相等是 = )
  9. 调用：select fun(params)
  10. drop function if exists fun 可加条件的删除
  11. 已提供的通用方法：

- delimiter 在命令行中，默认;回车即为结束，这时需要把结束符定义成其他符号，如$$ 或 //; 例子：1) delimiter // 2) 函数或过程体    3)  end; //

- 存储过程：是存储在数据库中的一组SQL语句，可以在查询过程中调用这个`过程名字`来执行相关SQL
  1. delimiter // create procedure procedure_name(params) 下面是 begin 过程体语句; end // delimiter;
  2. 参数类型：in 传入类型的参数， out 传出类型的参数(相当于return)，inout 既能传入又能传出
  3. 调用：call procedure_name; 或 call procedure_name(params);
  4. 删除：drop procedure procedureName

## 视图：对select语句进行封装，即存储在数据库中的一个虚拟表；(复杂的查询，多处使用，想更改很麻烦)

  1. 创建：create view view_name as select XX as 'XX', ... from tableName as 's'
  2. 查看：show tables
  3. 调用：select field from view_name;
  4. 删除：drop view view_name

## 事务：解决操作集合，如转帐，包含扣钱方 和 收钱方，整个操作是一体的，一个单元失败则会回滚
  - 原子性：全部操作，要做全做，要不做全不做
  - 一致性：结果一致
  - 隔离性：一个事务不爱另一个事务的影响
  - 持久性：对已提交的事务，系统必须保证该事务对数据库的改变不被丢失
  - 事务提交：整个事务下的操作集全部有效
  - 事务回滚：整个事务下的操作集全部作废
  - 脏读：一个事务将数据改变，但还未提交；此时另一个事务读取时读到的是新数据，而事务又将其回滚，此时事务再读取，发现数据又变回去了；而此前读到的变成的脏数据。(解决问题的方式：读已提交，可重复读)
  - 不可复读：事务多次查询数据，因另一事务对数据的操作，导致查询数据结果不一致。(解决问题的方式：可重复读)
  - 虚/幻读：事务读取值后对其更名，而另一事务又创建了此名称，而原事务再查询时发现未修改，产生了幻觉。(读未提交，读已提交)
  - 读已提交：一个事务在写时，禁止其他事务读写，提交后才能被读取。
  - 可重复读：一个事务在写时，禁止其他事务读写，一个事务在读取时，禁止其他事务写。
  - 串行化：每次只能执行一个事务。
  - mySQL：采用innodb为其默认引擎。insert, update, delete会触发事务；开启事务后，变更会维护到本地缓存中，而非物理表中。
  - 使用：begin; 提交事务 comit; 回滚事务 rollback;
  - 关闭默认事务提交：set [global] autocommit = 0;

## 其他命令

1. status, help  === \? 也可以 help select
2. 退出当前数据库：\q
3. 用户select user()\g 或 select User, Host, Password from user
4. 取消执行的命令：select \c
5. select current_time();
6. select 算术运算
7. delimiter $$  ... end $$ delimiter ;  先定义结束符，再恢复。

## API

- 字符串

1. select concat('a','-','b') 字符串连接
2. concat_ws('||','a','-','b') 以||字符间隔连接
3. lower() / lcase(), upper()
4. left(), right() 获取左 或 右侧字符串
5. ltrim(), rtrim() 删除前导 或 后续空格
6. replace(str, '?', '-') 将?替换成-
7. substring(str, offset, length)
8. trim() 删除前后两边的空格，也可以删除指定前导 和 后续的字符串
  trim(leading'?', '??abc????') 删除前导?号
  trim(trailing'?', '??abc????') 删除后续?号
  trim(both'?', '??abc????') 删除两边?号
9. [not] like (% 代表0 或 多个任意字符，_任意一个字符)
10. escape
11. length()
12. instr(str, substr) 子串第一个出现的位置

- 数字

1. format(124567.7, 2) 保留两位小数，第三位一个逗号
2. ceil() 入，取整
3. floor() 舍，取整
4. div 整数除法，如：3 div 4 = 0；/是有小数的
5. mod 取余 与 % 一样
6. power(3, 4) 幂
7. round(3.1415, 4) 取余，四舍五入；总长度为4
8. truncate(3.1415, 2) 截断，不四舍五入；保留2位小数
9. rand()
10. least(v1, v2, ...); greatest(v1, v2, ...)
11. abs()

- 日期时间

1. now() 当前日期和时间
2. curdate() 当前日期
3. curtime() 当前时间
4. date_add('2016-6-6', interval 1 year) 日期和一段时间的和 或 week, month
5. datediff('2016-6-6','2015-6-6') 日期的差
6. date_format('2016-6-6', '%m/%d/%Y') 日期格式化
7. sysdate() 与 current_timestamp() 与 now()一样
8. dayname(date) 获取星期几
9. str_to_date('2017年1月10号 11时02分02秒', '%Y年%m月%d号 %h时%i分%s秒') %H为24小时制

- 比较

1. field is [not] null
2. value [not] / in(1,2,3,5,6)
3. value [not]between A and B;
4. = 与 <=> 判断等于null时结果不同
5. isnull(field)

- 数据库信息函数
1. select connection_id()
2. select database()
3. select last_insert_id()
4. version()
5. user()

- 聚合函数
1. round(avg(field), 3) as avg_field
2. count(field) as counts
3. max(field) as max_field; min
4. sum(field) as sum_field

- 语句
1. (case field when v then expr when v2 then expr2 else expr3 end) as field1
2. if(expr, expr2, expr3) if函数

- 加密函数
1. md5('')
2. password('')

- 并发控制(多个连接对记录进行修改时，保证数据的一致性与完整性，且锁系统来控制)

1. 共享锁(读锁)：同一时间内，多用户可以读取同一个资源，读取过程中不会发生任何变化。
2. 排他锁(写锁)：任何时间只能有一个用户写入资源，进行写锁时会阻塞其他读或写锁操作。
3. 锁的力度娘----表锁(开销最小)，行锁(开销最大，并行性最大)，开销与使用锁的个数有关。
4. 存储引擎：default-storage-engine = innoDB 或 create table table_name() engine = innoDB; 或 alter table tbl_name engine = innoDB;

## 题

- 编写一个 SQL 查询，获取 Employee 表中第二高的薪水（Salary），返回字段名为SecondHighestSalary，为空时返回null (176) {"headers": {"Employee": ["Id", "Salary"]}, "rows": {"Employee": [[1, 100]]}}
  - select (select distinct (Salary) from Employee order by Salary Desc limit 1,1) as SecondHighestSalary
- 某网站包含两个表，Customers 表和 Orders 表。编写一个 SQL 查询，找出所有从不订购任何东西的客户。(183);
  - select Name as Customers from Customers  where Id not in (select CustomerId  from Orders)
  - select Name from Customers c left join Orders o on c.Id = o.CustomerId where o.Id is NULL


