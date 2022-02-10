1. type 和 interface 的区别
2. 函数参数类型与默认值、返回值类型
3. 两个参数类型一样，为 number 或 string，返回值类型与参数类型一致，`定义函数类型声明来完成`即函数重载 或把参数组合成一种类型。
4. TS 的工具类型：
   1. Partial 将类型里的属性全部变为可选项?
   2. Pick<T, K extends keyof T> 子属性挑出来，变成包含这个类型的子类型
5. 自己实现工具类
6. 定义一个类型只能是空对象的类型，一个非空数组类型

```typescript
// 为什么报错？u 可能包含 User 之外的未声明的属性
type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    ...u, // 所以展开运算符？
    id: u.id,
    kind: 'customer'
  }
}

// 函数参数类型
const isStrArr = (a: string[] | number[]): a is string[] => typeof a[0] === 'string'

function f(...args: string[] | number[]) {
  if (isStrArr(args)) {
    return args[0] + ':' + args[1];
  } else {
    return args[0] + args[1];
  }
}


type Partial<T> = {
  [P in keyof T]?: T[P];
};
```
