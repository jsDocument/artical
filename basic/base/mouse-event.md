### 鼠标事件

#### drag事件

1. DataTransfer 对象：退拽对象用来传递的媒介，使用一般为Event.dataTransfer。
2. draggable 属性：就是标签元素要设置draggable=true，否则不会有效果，例如：

```HTML
<div title="拖拽我" draggable="true">列表1</div>
```

1. ondragstart 事件：当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上----开始
2. ondragenter 事件：当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上----进入目标，目标元素事件
3. ondragover 事件：拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上----在目标上，目标元素事件
4. ondragleave 事件：拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上----离开目标，目标元素事件
5. ondrop 事件：被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上----放入目标，目标元素事件
6. ondragend 事件：当拖拽完成后触发的事件，此事件作用在被拖曳元素上---结束
7. event.preventDefault() 方法：阻止默认的些事件方法等执行。在ondragover中一定要执行preventDefault()，否则ondrop事件不会被触发。另外，如果是从其他应用软件或是文件中拖东西进来，尤其是图片的时候，默认的动作是显示这个图片或是相关信息，并不是真的执行drop。此时需要用用document的ondragover事件把它直接干掉。
8. event.setDataTransfer.effectAllowed 属性：就是拖拽的效果。
9. evetn.setDataTransfer.setDragImage() 方法：指定图片或者文档元素做拖动时的视觉效果。

#### dataTransfer 属性

- dropEffect 在dragenter和dragover事件中处理成需要的效果值；在drop和dragend事件中将初始化成期望的动作。
    1. copy: 复制到新的位置
    2. move: 移动到新的位置.
    3. link: 建立一个源位置到新位置的链接.
    4. none: 禁止放置（禁止任何操作）.
- effectAllowed 拖动时被允许的效果，可以在dragstart事件与dragenter及dragover事件中设置期望的效果
    1. copy: 复制到新的位置.
    2. move:移动到新的位置 .
    3. link:建立一个源位置到新位置的链接.
    4. copyLink: 允许复制或者链接.
    5. copyMove: 允许复制或者移动.
    6. linkMove: 允许链接或者移动.
    7. all: 允许所有的操作.
    8. none: 禁止所有操作.
    9. uninitialized: 缺省值（默认值）, 相当于 all.
- files 一个在数据传输上可用的本地文件列表，如涉及拖动文件时。
- types 保存一个被存储的类型列表作为第一项，顺序与被添加的数据的顺序一致。
- mozCursor: auto, default

#### dataTransfer 方法

1. obj.addElement() 设置手动源，修改这项将会影响拖动的哪个节点和dragend事件的触发。默认目标是被拖动的节点。
2. obj.clearData(type) 删除与给定类型关联的数据。或者元参时删除所有类型相关联的数据
3. obj.getData(type) 获取指定类型的数据
4. obj.setData(type, data) 给定的类型设置数据
5. obj.setDragImage(imgElement, offsetX, offsetY)



#### select事件

1. onselect 输入框文本先中时触发
2. onselectStart  用于所以对象，但不被input 和textarea支持  user-select

#### mouse事件

1. mousedown:鼠标按钮被按下（左键或者右键）时触发。不能通过键盘触发。
2. mouseup:鼠标按钮被释放弹起时触发。不能通过键盘触发。
3. click:单击鼠标左键或者按下回车键时触发。这点对确保易访问性很重要，意味着onclick事件处理程序既可以通过键盘也可以通过鼠标执行。 1+2连续；取消了其中一个click也不会被触发
4. dblclick:双击鼠标左键时触发。
5. mouseover:鼠标移入目标元素上方。鼠标移到其`后代元素上时会触发`。
6. mouseout:鼠标移出目标元素上方。
7. mouseenter:鼠标移入元素范围内触发，该事件不冒泡，即鼠标移到其`后代元素上时不会触发`。
8. mouseleave:鼠标移出元素范围时触发，该事件不冒泡，即鼠标移到其后代元素时不会触发。
9. mousemove:鼠标在元素内部移到时不断触发。不能通过键盘触发。


#### 事件位置(todo...)

1. clientX, clientY
2. layerX, layerY
3. offsetX, offsetY
4. movementX, movementY
5. pageX, pageY
6. screenX, screenY

#### touch事件(todo...)


#### 动画事件(todo...)

1. TransitionEnd
2. AnimationEnd




