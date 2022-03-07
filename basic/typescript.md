+ string 类型`任意属性`

```typescript
// 首先判断泛型 T 是否数组类型；
// 如果是数组类型，将数组成员类型 R 抽出来并返回；
// 如果不是数组类型，则原样返回 T；
type FlattenIfArray<T> = T extends Array<infer R> ? R : T;
type FlattenIfArray<T> = T extends (infer R)[] ? R : T;

// 首先判断泛型 T 是否 Promise 的子集；
// 如果是，将 Promise 中的泛型 R 抽出来并返回；
// 如果不是则原样返回 T；
type Unpromisify<T> = T extends Promise<infer R> ? R : T;

// 把对象的属性变成 readonly
const colors: { [prop: string]: string } = {
    red: '#f00',
    white: '#fff',
    black: '#000',
} as const;

// 基于原有类型创建新类型
type MakeConnected<T> = {
  [P in keyof T]: T[P];
};

// 基于原有类型创建只包含函数属性的集合
type MakeConnected<M> = {
    [P in PickFuncKey<M>]: M[P] extends (
        action: Action<infer T>,
    ) => Action<infer U>
        ? (action: T) => Action<U>
        : M[P] extends (input: Promise<infer T>) => Promise<Action<infer U>>
        ? (input: T) => Action<U>
        : never;
};

// 使用 `MakeConnected` 时传入 module 的类型
type Connect = (module: EffectModule) => MakeConnected<typeof module>;
type PickFuncKey<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}
interface A {
  [prop: string]: number;
}
// number 类型
interface B {
  [index: number]: string;
}
// 不成立，string 不是 number 的子集，只有子集才可以如此声明
interface C {
  [prop: string]: number; // 同时也是对其他项做了限制
  [index: number]: string;
}
// 不成立
interface Person {
  name: string;
  age?: number;
  [prop: string]: string;
}
// 用联合类型解决
interface Person {
  name: string;
  age?: number;
  [prop: string]: string | number;
}
// 不成立，定义的任意属性 number 类型影响前面的类型
type MyArray = {
  0: string;
  [index: number]: number;
};
// 放在第一个，不会影响后面的
type Arg = {
    [index: number]: number;
    length: string;
};
```


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
