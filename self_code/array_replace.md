+ Array.prototype.splice(start, deleteCount, ...replaceArr)
  + start 小于 0---取绝对值 > 数组长度 start = 0 或 start += len
  + 没有传 deleteCount 时，deleteCount = len - start
  + 用 slice(start, start+deleteCount) 存删除的数据
  + replaceArr + 数组后半部分，循环更新下标，更新 length
