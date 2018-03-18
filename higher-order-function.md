# 高階函数特性与装饰者模式

## 高階函数特性

- 函数可以作为参数被传递
- 函数可以作为返回值输出

## 高階函数特性使用场景

### 作为参数被传递: 回调函数

```javascript
function callBack(str) {
    console.log(str);
}

function test(str, callback) {
    callback(str);
}

test('test', callBack);
```

### 作为返回值输出: 构建闭包

```javascript
var logPick = (function () {
    var pick = 1;
    return function () {
        console.log(pick);
        pick++;
    };
})();
```