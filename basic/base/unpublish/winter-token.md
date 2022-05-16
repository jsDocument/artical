```html
+ 文法：词法(词法规定了语言的最小语义单元：token, 技术上可以使用`状态机`或者`正则表达式`来进行) 和 语法
+ 分类：
  + WhiteSpace 空白字符
  + LineTerminator换行符
  + Comment注释
  + Token词
    + IdentifierName 标识符名称，典型案例是我们使用的变量名，注意这里关键字也包含在内了。
    + Punctuator 符号，我们使用的运算符和大括号等符号。
    + NumericLiteral 数字直接量，就是我们写的数字。
    + StringLiteral 字符串直接量，就是我们用单引号或者双引号引起来的直接量。
    + Template 字符串模板，用反引号` 括起来的直接量。
+ 对于 /, /= 与正则表达式的冲突，解决办法是：
  + JavaScript 的解决方案是定义两组词法，然后靠`语法分析`传一个`标志给词法分析器`，让它来决定使用哪一套词法
+ 五种空白符：<TAB>或<HT>---\t 缩进 Tab, <VT>---\v 垂直 Tab, <FF>分页符\f,  <SP>普通空格, <NBSP>非断行空格, <ZWNBSP>Unicode 中的零宽非断行空格
+ 换行符：<LF>\n, <CR>\r\n 真正意义的回车, <LS>Unicode 中的行分隔符, <PS>Unicode 中的段落分隔符
+ 自动插入分号和“no line terminator”规则
+ IdentifierName：以“$”、“_”或者 Unicode 字母开始，除了开始字符以外， 后Unicode 中的连接标记、数字、以及连接符号
+ 关键字：await break case catch class const continue debugger default delete do else export extends finally for function if import instance of new return super switch this throw try typeof var void while with yield
+ 未来的关键字：implements package protected interface private public enum
+ 12.toString() 这时候12. 会被当作省略了小数点后面部分的数字，而单独看成一个整体，所以我们要想让点单独成为一个 token，就要加入空格
+ 数字直接量、字符直接量、正则直接量
```
