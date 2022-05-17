### 步骤
1. 初始化GL
2. 初始化Shaders
3. 初始化Buffers
4. clearColor()
5. enable()
6. drawScene

### 缓存 或 Rnderbuffer
+ createBuffer()  gl.bindBuffer(gl.ARRAY_BUFFER, bufferObj)  bufferData(gl.ARRAY_BUFFER, new Float32Array(坐标/颜色数据),gl.STATIC_DRAW)  deleteBuffer()  isBuffer()
+ bindRenderbuffer()  createRenderbuffer()  deleteRenderbuffer()  isRenderbuffer()
+ ARRAY_BUFFER
+ COLOR_BUFFER_BIT


### 坐标的表示



### 画
+ STATIC_DRAW


### Shader
+ 创建  createShader(TYPE)
+ FRAGMENT_SHADER
+ VERTEX_SHADER
+ shaderSource(shaderObj, str)
+ 编译  compileShader(shaderObj)
+ getShaderParameter(shaderObje, gl.COMPILE_STATUS)
+ getShaderInfoLog(shaderObj)

+ 创建项目 var = gl.createProgram();
+ 编译好的shaderObj，连上管线，申请了var, 把shaderObj交给var, attachShader(var, shaderObj)
+ 连接  linkProgram(var)
+ getProgramParameter(var, gl.LINK_STATUS)
+ 画笔  useProgram(var)
+ 设置GLSL里变量与输入数据的关系
+ getAttribLocation(var, "GLSL var")  *****  获取GLSL中变量的值？在最后渲染时使用？
+ enableVertexAttribArray(get的值)   

+ getUniformLocation(var, "GLSL var")   ******
+ setMatrixUniforms()

### 处理画布
+ clearColor(r,g,b,a)
+ clearDepth(1.0)  清理所有
+ enable(gl.DEPTH_TEST)  深度测试
+ depthFunc(gl.LEQUAL)   近远景
+ clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

### 镜头布置并开始用数据 进行绘制
+ 创建 obj = mat4.create()
+ mat4.perspective(obj, 弧度 45\*Math.PI/180, aspect, zNear, zFar)
+ 创建 obj1 = mat4.create()
+ mat4.identity()  初始化为单位矩阵，任何矩阵乘以单位矩阵，还是自己
+ 变换 mat4.translate(创建对象，创建对象，[x, y, z])
+ gl.bindBuffer(gl.ARRAY_BUFFER, buf.position/ color)  ????
+ gl.vertexAttribPointer()  ????
+ gl.enableVertexAttribArray()  ????
+ gl.uniformMatrix4fv() ????
+ gl.drawArray()


+ `模型视图矩阵`
+ mat4.perspective()
+ mat4.create()
+ uniformMatrix4fv(var.uniform, false, Matrix视图模型)  把矩阵与GLSL中的对应变量绑定了
+ mat4.translate()







### 绘制
+ viewport(x, y, width, height)
+ clear()
+ mat4.perspective()



### 显卡工作流程：即GLSL
+ 渲染：将二维数据 换算后打到屏幕的每个像素上。
+ 管线：不是一次渲染完成，故定义了渲染过程的多个步骤
+ 着色器：渲染步骤上的任务，由次物负责

### HTML部分
+ type = "x-shader/x-vertex"
+ 声明  attribute vec3 aVertexPosition;
+ main  void main(void) {  gl_Position = vec4(aVertexPosition, 1.0); }

+ type = "x-shader/x-fragment"
+ 声明  precision highp float;
+ main  void main(void) {  gl_FragColor = vec4(0.5, 0.5, 1.0, 1.0); }


####  ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
+ 一个WebGL可以理解为一个状态机，一旦修改了某个属性，除非再次修改否则属性会一直保持下来。


### 常量
+ 点  POINTS  每个顶点显示的大小
+ 线段  LINES   这种图元把`相继的顶点配对后`解释为线段的两端
+ 拆线  (LINE_STRIP, LINE_LOOP)   让相继的顶点相连，LINE_LOOP会在最后一个顶点和第一个顶点之间画一条线，得到一个环路
+ 三角形  TRIANGLE  相继的三个顶点组合在一起
+ 三角形条带 和 三角形扇  TRIANGLE_STRIP 每三个点连接成一个三角形   TRIANGEL_FAN  第两个分别与0号点形成三角形
+ 多边形  POLYGON  QUADS  QUAD_STRIP




+ ELEMENT_ARRAY_BUFFER


### 实例方法
+ 设置一种颜色来清理画布    clearColor(rgba)  clearDepth(1.0)
+ 开启尝试测试    enable()
+ 设置尝试测试   depthFunc()
+ 清理画布    clear()


+ viewport(x,y,width,height)
+ drawElements()

+ bindBuffer()
+ vertexAttribPointer()
+ enableVertexAttribArray()

+ createProgram()
+ linkProgram()
+ getProgramParameter()
+ useProgram()

+ getAttribLocation()

+ bindBuffer()
+ bufferData()

+ attachShader()


### program 与 shader  与 Framebuffer
+ createProgram()
+ linkProgram()
+ useProgram()
+ deleteProgram()
+ isProgram()
+ validateProgram()
+ getProgramParameter()
+ getProgramInfoLog()

+ createShader()
+ shaderSource()   发送source到shader对象
+ attachShader()
+ compileShader()  编译
+ detachShader()
+ deleteShader()
+ isShader()
+ getAttachedShaders()
+ getShaderParameter()
+ getShaderPrecisionFormat()  rangeMin, rangeMax, precision
+ getShaderInfoLog()
+ getShaderSource()


+ bindFramebuffer()
+ createFramebuffer()
+ deleteFramebuffer()
+ isFramebuffer()

### Query
+ createQuery()
+ deleteQuery()
+ isQuery()
+ beginQuery()
+ endQuery()
+ getQuery()
+ getQueryParameter()

### sampler
+ createSampler()
+ deleteSampler()
+ isSampler()
+ bindSampler()
+ getSamplerParameter()

### Sync
+ fenceSync()
+ deleteSync()
+ isSync()
+ clientWaitSync()
+ waitSync()
+ getSyncParameter()

### Texture ...
+ bindTexture()
+ createTexture()
+ deleteTexture()
+ isTexture()

### transformFeedback...

### uniform
+ getUniformLocation()
+ uniform()


### vertexArray
+ createVertexArray()
+ deleteVertexArray()
+ isVertexArray()
+ bindVertexArray()

+ enableVertexAttribArray()
+ vertexAttribPointer()


### draw
+ drawArrays()

### 内置变量


### 内置常量


