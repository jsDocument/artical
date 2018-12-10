# http基础

1. 传输过程
  1. 客户端在用户层发磅一个Http请求
  2. 传输层把应用层传来的数据进行分割, 并在各个报文的上标记序号及端口号后转发给网络层
  3. 网络层增加通信目的地的MAC地址, 转发给链路层

IP地址指明了节点被分配到的地址, MAC地址是网上属的固定地址; 根据ARP协议解析地址, 根据通信方的IP反查出对应的MAC地址

2. TCP的三次握手
  1. 发送端发送一个带SYN标志的数据包给对象
  2. 接收端收到后, 回传一个带SYN/ACK标志的数据包, 以示传达确认信息
  3. 最后发送端再回传一个带ACK标志的数据包, 以示'握手'结束

3. NDS 解析的过程
4. 统一资源标识符URI

5. 请求配置



6. 响应
  1. if-modified-since
  2. keep-alive 持久化
  3. cache-control
  4. cookie???set-cookie 通知客户端保存cookie
  5. 压缩
  6. 分块传输编码---实体主体分块
  7. 传送的数据类型: 多部分对象集合, multipart/byteranges[form-data]
  8. Range 下载的实体范围, 即实体的某一部分
  3. 管线化？使用？


7. 请求的方法:
  1. get
  2. post
  3. put
  4. delete
  5. trace
  6. connect

8. http2比http1的优点
  + 多路复用
  + 二进制分帧
  + 首部压缩
