# 字符串困难系列

[正则表达式匹配](https://leetcode-cn.com/problems/regular-expression-matching/)

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

// 待测方案
var isMatch = function(s, p) {
    if(typeof s !='string' || typeof p != 'string') return false;
    let str, len;
    p = p.replace(/\?|\*+|([a-z])\1*/g,function(all, one){
        len = all.length;
        str = "";
        if(all.length>1 && all.indexOf('*')<0){
            return str = `${one}{${len}}`;
        }else if(all==="?"){
            return "[a-z]"
        }else if(all.indexOf("*")>-1){
            console.log(all)
            return "[a-z]*?"
        }else{
            return all;
        }
    })
    p = new RegExp("^"+p+"$");
    console.log(p)
    return p.test(s)
};
console.log(isMatch("abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
"**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"))
```

[通配符匹配](https://leetcode-cn.com/problems/wildcard-matching/)

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(typeof s !='string' || typeof p != 'string') return false;
    let sLen = s.length, pLen = p.length, index_s = 0, index_p = 0, mark_s = 0, start_p = -1;
    while(index_s<sLen){
        if(s[index_s]===p[index_p] || p[index_p]==='?'){
            index_s++;
            index_p++;
        }else if(p[index_p]==='*'){
            mark_s = index_s;
            start_p = index_p;
            index_p++;
        }else if(start_p !== -1){
            index_s = mark_s + 1;
            index_p = start_p + 1;
            mark_s++;
        }else{
            return false;
        }
    }
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

[有效数字](https://leetcode-cn.com/problems/valid-number/)

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

[解析布尔表达式](https://leetcode-cn.com/problems/parsing-a-boolean-expression/)

```javascript
var parseBoolExpr = function(expression) {
    let subExp = /(!|\||&)(\([,tf]+\))/g, matched, copied, lastIndex = 0, calResult, len = expression.length, operatorReg = /!|\||&/;
    // 子项
    while(operatorReg.test(expression)){
        copied = "";
        while(matched = subExp.exec(expression)){
            if(!matched){
                break;
            }
            if(copied.length === 0){
                copied = expression.substr(0, matched.index);
            }else{
                copied += expression.substring(lastIndex, matched.index);
            }

            calResult = runExp(matched[1], matched[2], true);
            copied += calResult;
            lastIndex = matched.index + matched[0].length;
        }
        if(lastIndex < len){
            copied += expression.substr(lastIndex);
        }

        if(operatorReg.test(copied) && copied.includes(',')){
            expression = copied;
        }else if(copied.length === 1){
            return copied === 'f' ? false : true;
        }else{
            return runExp(copied.substr(0,1), copied.substr(1), false);
        }
    }
}
function runExp(operator, exp, needRestore){
    let result;
    if(!exp.includes('true') && !exp.includes('false')){
        exp = exp.replace(/t/g, 'true').replace(/f/g, 'false');
    }
    if(operator !== '!'){
        exp = exp.replace(/,/g, `${operator}${operator}`);
    }else{
        exp = operator + exp;
    }
    result = new Function(`return ${exp}`)();
    if(needRestore === true){
        return result ===  false ? 'f' : 't';
    }
    return result;
}
```

[面试题19. 正则表达式匹配](https://leetcode-cn.com/problems/zheng-ze-biao-da-shi-pi-pei-lcof/)

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const reg = new RegExp(`^${p}$`, 'y');
  return reg.test(s);
};
```
