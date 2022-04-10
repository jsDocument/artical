[删除注释](https://leetcode-cn.com/problems/remove-comments/)

```javascript
/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    let singleLine = /\/\/[^\n]+/;
    let mutilAll =  /\/\*+[^\n\r]*?\*+\//;
    let mutiLineStart = /\/\*+[^\*]*\**[^\/]+\/*/;
    // let _mutilAll = /\/\*+[^\*]*\**[^\/]*\*+\//g;
    // let _mutiLineStart = /\/\*+[^\*]*\**[^\/]+/g;
    let mutilLineEnd = /[^*]*\**[^\/]*\/*\*+\//;
    let mergeStr = "", inMutil = false, i = 0, len = source.length, needMerge = [], lastMerge, temp1, temp2, temp3;
    for(; i < len; i++){
        if(mutilLineEnd.test(source[i]) && inMutil){
            needMerge[needMerge.length - 1].end = i;
            console.log('end', mutilLineEnd.exec(source[i]));
            source[i] = source[i].replace(mutilLineEnd, "");
            inMutil = false;
            source[i] = source[i].replace(singleLine, "");
        }else if(inMutil){
            source[i]="";
        }else if(!inMutil && singleLine.test(source[i]) && (mutilAll.test(source[i]) || mutiLineStart.test(source[i]))){
            temp1 = singleLine.exec(source[i])
            console.log('three', i, source[i])
            while(temp1 && ((temp2 = mutilAll.exec(source[i])) || (temp3 = mutiLineStart.exec(source[i])))){
                console.log('temp1',temp1);
                console.log('temp2', temp2);
                console.log('temp3', temp3);
                if(!!temp2){
                    if(temp1.index < temp2.index){
                        source[i]= source[i].replace(singleLine, "");
                        break;
                    }else{
                        source[i]= source[i].replace(mutilAll, "");
                    }
                }else if(!!temp3){
                    if(temp1.index < temp3.index){
                        source[i]= source[i].replace(singleLine, "");
                        break;
                    }else{
                        inMutil = true;
                        needMerge.push({
                            start: i
                        })
                        source[i]= source[i].replace(mutiLineStart, "");
                    }
                }else{
                    break;
                }
                temp1 = singleLine.exec(source[i])
            }
        }else if(!inMutil && singleLine.test(source[i])){
            console.log("single",singleLine.exec(source[i]));
            source[i]= source[i].replace(singleLine, "");
        }else if(!inMutil && mutilAll.test(source[i])){
            console.log("muti single",mutilAll.exec(source[i]));
            source[i] = source[i].replace(mutilAll, "");
        }else if(!inMutil && mutiLineStart.test(source[i])){
            console.log("muti start",mutiLineStart.exec(source[i]));
            needMerge.push({
                start: i
            })
            source[i] = source[i].replace(mutiLineStart, "");
            inMutil = true;
        }
    }
    let mergeItem;
    for(i = 0; i < needMerge.length; i++){
        mergeItem = needMerge[i];
        source[mergeItem.start] = source[mergeItem.start].concat(source[mergeItem.end]);
        source[mergeItem.end] = "";
    }
    for(i = len-1; i>=0; i--){
        if(source[i].length === 0){
            source.splice(i,1)
        }
    }
    return source;
};
```

[独特的电子邮件地址](https://leetcode-cn.com/problems/unique-email-addresses/)

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
