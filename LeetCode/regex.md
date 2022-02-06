# 正则相关的题目

1. 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '\*' 的正则表达式匹配；匹配应该覆盖整个字符串 (s) ，而不是部分字符串。

::: tip
'.' 匹配任意单个字符。
'\*' 匹配零个或多个前面的元素。

说明:
- s 可能为空，且只包含从 a-z 的小写字母。
- p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 \*。

:::

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(typeof s !='string' || typeof p != 'string') return false;
    let str;
    p = p.replace(/\./g,function(all, i){
        return "[a-z]"
    })
    p = new RegExp("^"+p+"$");
    return p.test(s)
};
```

2. 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '\*' 的通配符匹配；两个字符串完全匹配才算匹配成功。

:::tip
'?' 可以匹配任何单个字符。
'\*' 可以匹配任意字符串（包括空字符串）。

说明:
- s 可能为空，且只包含从 a-z 的小写字母。
- p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 \*。

:::

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(typeof s !='string' || typeof p != 'string') return false;
    let sLen = s.length, pLen = p.length, index_s = 0, index_p = 0, mark_s = 0, start_p = -1;
    // 匹配进行则更新下标，否则则匹配失败
    while(index_s<sLen){
        // s与p都为非模式字符或 ?，更新其循环下标
        if(s[index_s]===p[index_p] || p[index_p]==='?'){
            index_s++;
            index_p++;
        // 模式为*时，s 和 p记录*的位置，只更新p循环的下标
        }else if(p[index_p]==='*'){
            mark_s = index_s;
            start_p = index_p;
            index_p++;
        // s和p循环下标不一致时且为非模式时，更新s和p循环的下标及 * 的位置
        }else if(start_p !== -1){
            index_s = mark_s + 1;
            index_p = start_p + 1;
            mark_s++;
        }else{
            return false;
        }
    }
    // s循环结束，但p模式还没循环，如果直至结束都是都是*，则更新下标，否则则匹配失败
    while (index_p < pLen) {
        if (p[index_p] == '*'){
            index_p++;
        }else{
            return false;
        }
    }
    return true;
};
```

3. 验证给定的字符串是否为数字。

::: tip
例如:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
:::

说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();
    return /^(?:-|\+?)(?:\d+|\d*\.?\d+|\d+\.?\d*)(?:e(?:\-?|\+?)\d+)?$/.test(s)
};
```

4. 给定一个字符串，逐个翻转字符串中的每个单词。

```javascript
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.replace(/^\s+|\s+$/g, '');
    return str.split(/\s+/).reverse().join(' ');
};
```

5. 每封电子邮件都由一个本地名称和一个域名组成，以 @ 符号分隔。

    例如，在 alice@leetcode.com中， alice 是本地名称，而 leetcode.com 是域名。

    除了小写字母，这些电子邮件还可能包含 ',' 或 '+'。

    如果在电子邮件地址的本地名称部分中的某些字符之间添加句点（'.'），则发往那里的邮件将会转发到本地名称中没有点的同一地址。例如，"alice.z@leetcode.com” 和 “alicez@leetcode.com” 会转发到同一电子邮件地址。 （请注意，此规则不适用于域名。）

    如果在本地名称中添加加号（'+'），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件，例如 m.y+name@email.com 将转发到 my@email.com。 （同样，此规则不适用于域名。）

    可以同时使用这两个规则。

    给定电子邮件列表 emails，我们会向列表中的每个地址发送一封电子邮件。实际收到邮件的不同地址有多少？

```javascript
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const reg = /[^@]+/
    const reg1 = /\+[^@]*/;
    let temp;
    emails.forEach((item,i)=>{
        emails[i] = item.replace(reg, function(match, index, all){
            temp = all.substr(index, match.length);
            return match.replace(/\./g, '');
        }).replace(reg1, '');
    });
    emails = [...new Set(emails)]
    return emails.length;
};
```
