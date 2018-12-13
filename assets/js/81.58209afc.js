(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{113:function(v,_,t){"use strict";t.r(_);var e=t(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"基本语法与概念"}},[v._v("基本语法与概念")]),t("ul",[t("li",[t("p",[v._v("基础知识\n.cpp--\x3e.obj(编译)--\x3e.exe(连接程序)")]),t("ol",[t("li",[v._v("输入流"),t("code",[v._v("cin")]),v._v("，输出流"),t("code",[v._v("cout")]),v._v("；提取操作符："),t("code",[v._v(">>")]),v._v("， "),t("code",[v._v("<<")]),v._v("。")]),t("li",[v._v("包含头文件： "),t("code",[v._v("#include <package>")]),v._v("， 尖括号引入系统包文件，"),t("code",[v._v('"')]),v._v("引入自己定义的包文件。")]),t("li",[v._v("使用命名空间(将程序库名称封装起来的方法)：using namespace std。")]),t("li",[v._v("对象的定义与初始化：int z(50)  等于  int z = 50。")]),t("li",[v._v("函数与返回值：int main(){ return 0; }, 使用前要对函数进行原型声明  int add(int a, int b)。")]),t("li",[v._v("定义常量：c用 "),t("code",[v._v("#define")]),v._v("，c++建议使用const，必须进行初始化，除非使用extern const int var; c++的预处理语句位于行首的符号"),t("code",[v._v("#")]),v._v("开始，包含宏定义、文件包含、条件编译语句。")]),t("li",[v._v("重载，类型：void(无类型)")]),t("li",[t("code",[v._v("&")]),v._v("取对象存储的首地址")]),t("li",[v._v("指针，声明："),t("code",[v._v("double *p")]),v._v("；申请分配地址："),t("code",[v._v("p = new double[2]")]),v._v("；操作 "),t("code",[v._v("*(p + 0)")]),v._v("； 指针的取值与赋值？指针是直接操作内存地址的机制。可以由整数数强制转换得到；delete 释放内存。")]),t("li",[v._v("别名："),t("code",[v._v("int &a = x(对象名)")]),v._v("; &a引用的是x的地址"),t("code",[v._v("&x")]),v._v("， a引用的是值；指向引用的指针： int * p = &x；不可以声明"),t("code",[v._v("引用的引用")]),v._v("，"),t("code",[v._v("数组的引用")]),v._v("，"),t("code",[v._v("指针的引用")]),v._v("；作用与指针相似；引用是较高级的封装了指针的特性。间接建立对数组的引用"),t("code",[v._v("typedef int array[10](int 型的数组类型array标识符)， array &b = a")]),v._v("；const 定义的不能再作为左值；")]),t("li",[t("code",[v._v("const int * p")]),v._v("---指向常量的指针； "),t("code",[v._v("int * const p")]),v._v("---指针本身成为一个const指针； "),t("code",[v._v("const int * const p")]),v._v("---指向常量的常量指针； "),t("code",[v._v("const * int p")]),v._v("---？？？？？")])])]),t("li",[t("p",[v._v("结构、函数")]),t("ol",[t("li",[v._v("struct 结构名{ 数据成员  成员函数}; 结构对象.成员函数；因为其有公有特性。")]),t("li",[v._v("如果是结构Point, 包含fun函数；使用：Point a; a.fun()")]),t("li",[v._v("private私有---封装性；函数名与结构名相同则为"),t("code",[v._v("构造函数")]),v._v("，专门用于初始化对象。class替换struct，是一个标准的类。")]),t("li",[v._v("多态性：相同名称的函数，不同的对象调用可以有不同的行为。")]),t("li",[v._v("string：不能为"),t("code",[v._v("单引号")]),v._v("括起来的字符串常量进行初始化。")]),t("li",[v._v("complex：实部 + 虚部 aa(2,3)")]),t("li",[v._v("string对象数组、泛型算法---取字符串地址&str[0]；str1 = str2, 这种指向还需要再进行内容复制吗？？？？")])])])]),t("h2",{attrs:{id:"数据结构-顺序存储、链接存储、索引存储、散列存储"}},[v._v("数据结构(顺序存储、链接存储、索引存储、散列存储)")]),t("ul",[t("li",[v._v("算法：输入、输出、有穷性、确定性、可行性；"),t("strong",[v._v("算法分析")])]),t("li",[v._v("线性表(为空？求长？求位置元素？按值查找位置、插入、删除)\n"),t("ol",[t("li",[v._v("线性表"),t("code",[v._v("链式存储结构--data, next")])]),t("li",[v._v("循环链表")]),t("li",[v._v("双向链表"),t("code",[v._v("prior, data, next")])])])]),t("li",[v._v("栈与队列\n"),t("ol",[t("li",[v._v("栈：top, bottom, 先进先出；一般用于递归")]),t("li",[v._v("队列：")])])])])])}],!1,null,null,null);_.default=i.exports}}]);