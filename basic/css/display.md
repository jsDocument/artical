# grid 与 flex 布局

- width: clamp(23ch, 50%, 64ch) 最小尺寸为23个字符，最大尺寸为 64个字符，实际尺寸为父容器的 50%，也可以用 font-size: clamp(<min>, <actual>, <max>)
- 宽高比：aspect-ratio: 16 / 9;

#### display: grid

父容器

- place-item:center 单个位于父容器的水平与垂直居中
- grid-template-columns: minmax(min, max) 1fr, 父容器宽度变化时，两列宽度占据情况
- grid-template-rows: auto 1fr auto, 父容器宽度变化时，三行宽度变化引起的高度占据情况
- grid-template: 行/列
- grid-gap

网格值可用函数：RAM

- repeat(12, 1fr)，平分成 12 份
- auto-fit, auto-fill
- minmax()

子元素

- grid-column

#### diplay: flex

父容器

- flex-direction: column
- justify-content: space-between


- 子元素flex: grow shink base




