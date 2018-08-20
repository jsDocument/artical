# 为什么会有Generator

- 基础理论

1. iterator是专门为迭代而设计的接口, 有__next__方法与返回包含__value__与__done__属性的对象, iterator内部有一个指向迭代位置的指针, 每次调用next方法, 自动移动指针并返回结果对象

2. generator是为了方便创建iterator, 即generator返回的是一个iterator的函数

3. 箭头函数不能做generator 且 generator不能跨函数

- iterable

