# 日期、时间相关

## time (参数-----需要运行的额外指定) 统计给定命令白发花费时间

- 格式(-f %E 真实时间, %U用户时间，%s系统时间)

## date  日期

1. date -d "1 day ago" + "%Y-%m-%d %H:%M:%%S"
2. date -d "1970-01-01 1234567890 seconds" +"%Y-%m-%d %H:%m:%S"
3. date -d "2 second" +"%Y-%m-%d %H:%M.%S"
4. date +%Y%m%d                   //显示前天年月日
5. date -d "+1 day" +%Y%m%d       //显示前一天的日期
6. date -d "-1 day" +%Y%m%d       //显示后一天的日期
7. date -d "-1 month" +%Y%m%d     //显示上一月的日期
8. date -d "+1 month" +%Y%m%d     //显示下一月的日期
9. date -d "-1 year" +%Y%m%d      //显示前一年的日期
10. date -d "+1 year" +%Y%m%d      //显示下一年的日期
11. date -d "Dec 5, 2009 12:00:37 AM 2 year ago" +"%Y-%m-%d %H:%M.%S"

- mac date命令

1. date +%Y-%m-%d-%H:%M:%S
2. date +%s 时间戳
3. date -r 1545705922 转时间
4. date -v+2m
5. date -j -f %Y-%m-%d 2015-09-28

## cal  日历
