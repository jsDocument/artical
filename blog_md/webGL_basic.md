var canvas = document.createElement('canvas'),
        gl = canvas.getContext('experimental-webgl'),
        debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

    console.log(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));

+ GPU型号

<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, viewport-fit=cover" />

@supports (bottom: constant(safe-area-inset-bottom)) {
  div {
    margin-bottom: constant(safe-area-inset-bottom);
  }
}

@media (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio : 3){
    @supports (bottom: constant(safe-area-inset-bottom)) {
        
    }
}

### OpenGL的着色语言


### 网孔---一系列多边形组成，多边形由顶点构成；细分的多边形来逼迫真实对象。

+ 多边形
+ 顶点


### 材料、纹理、光照

### 变换、矩阵


### 相机、视角、视窗
+ 有时通过移动相机位置来获得拍摄特效，这些通过变换矩阵来实现，cameras定义了一组矩阵，第一个矩阵定义相机的位置和方向，第2个定义了到viewport的位移，被称之为投影矩阵。
+ 视角：perspective 观察空间
+ viewports：对象在可视窗口的投影


`图中眼睛（EYE）位置为观察点，fovy为观察（拍摄）角度，aspect为观察空间的宽高比，zNear为近裁剪面也就是Viewport所在的投影平面，zFar为远裁剪面，由远近裁剪面以及视角所确定的淡绿色3D空间称之为视椎体（View Frustum），用来裁剪视图，在该视锥体以外的物体将不会被渲染。`


### 着色器
+ 建立好投影空间和3D网孔模型后，需要把它渲染到屏幕上
+ 顶点着色器（Vertice Shader） 用来把3D空间坐标映射到2D视窗平面
+ 片段着色器（Fragment Shader）也称为像素着色器，对投影图像进行着色


### 计算机图像硬件结构
+ WebGL直接基于GPU来绘制图像，GPU利用专有的图形内存/缓存来加速渲染，帧缓存包含颜色、透明度、深度和模版掩码属性。GPU把像素写入帧缓存，显示设备从缓存中进行光栅化扫描读取，为了保持读写同步，GPU使用了双缓存（前缓存和后缓存）以及垂直同步（vSync）技术，所谓vSync就是在光栅扫描结束时给GPU发出信号，使得GPU可以置换前后缓存。

### WebGL渲染工作流水线
+ 顶点(Vertex)着色器的处理，主要是一组矩阵变换操作，用来把3D模型（顶点和原型）投影到Viewport上，输出是一个个多边形（比如三角形）
+ 光栅化，也就是把三角形连接区域按一定的粒度逐行转化成片段（fragement），我们可以把这些片段看做是3D空间的像素点
+ 片段着色器的处理，为每个像素添加颜色
+ 把3D空间的片段合并输出为2D像素数组并显示在屏幕上

### 顶点（Vertex）、图元（Primitives）、片段和像素
+ 顶点不只是立体几何中的坐标点，它还包含颜色、纹理，以及表面法向量（通常是由表面向外）用来区分对象的正反面。表面法向量遵循右手规则（或逆时针旋转）。
+ 图元（或原始对象）是一组最简单的图形元素，如点、线段和若干点的闭合连接；有常用的原型【各种线连成的形状】
+ 像素是二维空间数据，坐标为（x,y），然后还有颜色，用于在物理屏幕上显示。
+ 片段是三维空间的数据，坐标为（x,y,z），x/y和2D像素相同，z表示颜色深度，合成时需要处理前后遮挡关系以及透明度的处理。除此之外，片段是顶点光栅化而来，其还包含和Vertex对象相同的属性，比如纹理。


### 顶点着色器的变换操作
+ 现代GPU中，顶点处理和片段处理都是可编程的，称之为着色器（Shader）。顶点处理包括如下变换：
+ 放置对象在3D空间中，也就是模型变换（Model Transformation）
+ 设定相机的位置和观察方向，称之为视图变换或取景变换（View transformation）
+ 选择相机镜头（广角，正常或可伸缩的），调整焦距和缩放系数来设定相机的视觉空间，称之为投影变换(Projection transformation)，投影方式有两种：正交投影和远景投影，其中常用的是远景投影，即模拟人眼来观察真实世界中的对象，正交投影可以理解为把观察点拉到足够远，此时视觉空间将逼近为平行的长方体而不再是一个视椎体。
+ 把相片打印到选定纸面区域，称之为视窗变换（Viewport transformation），这一步是在光栅化的时候执行的，注意Viewport实际对应于屏幕Web应用程序的窗口，其坐标原点是在左上角，y轴的方向向下。

### 片段着色器：多边形中的每一个像素都叫一个片段，片段着色器的工作就是建立每个像素的色彩

### 顶点着色器：定义每个顶点的位置和形状

### 平移、旋转、缩放通过仿射变换实现，把三维坐标放到4\*4的矩阵中, 然后把他们乘起来，就可以了。

1. 场景----显示3D空间内物体的容器
2. 坐标系统---笛卡尔坐标系，中心为原点，Z为深度坐标【食指伸直保持水平 X，中指垂直向下  Y，拇指指向自己  Z】

首先最外层为场景，场景中包含一个或多个摄像机，场景中还可以包含模型、粒子等。

模型、粒子等也可包含在Object3D对象中。

         创建一个模型的过程是：

1)      创建模型所需要的顶点

2)      创建一个几何图形对象，并将顶点传递给几何图形对象。

3)      创建模型的纹理对象即材质。

4)      创建网格对象，并将几何图形对象以及纹理对象传递给网格对象。

5)      将网格添加到可容纳网格对象的容器内，如scene、Object3D等。

1、场景：Scene

2、位置：Position

3、投影：Projector

4、正交：Orthographic

5、透视：Perspective

6、摄像机：Camera

7、渲染：Render

8、向量：Vector

9、三维向量：Vector3

10、四维向量：Vector4

11、矩阵：Matrix

12、3行3列矩阵：Matrix3

13、4行4列矩阵：Matrix4

14、顶点：Vertex

15、顶点的复数形式：Vertices

16、几何对象：Geometry

17、纹理：Texture

18、材质：Material

19、网格：Mesh

20、变换：Transform

21、视图：View

