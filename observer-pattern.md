# 观察者模式介绍与简略使用

## 问题背景

用户与页面的交互会导致数据状态发生变化，数据状态变化，又需要通过UI表现出来。随着页面复杂度的提高，数据变化后要通知的UI组件也会变得越来越多。如果不对这一步进行解耦，这部分的代码会变得越来越冗余和复杂，对代码的可读性和可测试性都带来不良的影响。

所以，我们需要对【数据变化】 -> 【UI变化】这部分的逻辑进行解耦

## 观察者模式介绍

观察者模式（Observer pattern）是一种管理对象及其行为和状态之间的关系的得力工具。

用JavaScript的话来说，这种模式的实质就是对可以对程序中的某个对象的状态进行观察，并且在其发生改变时能够得到通知。

所以，这个模式可以解决我们现在面对的问题："对【数据变化】 -> 【UI变化】这部分的逻辑进行解耦"

观察者模式中存在两个角色：观察者和被观察者(又名订阅者和发布者)。下面是观察者模式的实现原理。

## 观察者模式实现原理

我们可以通过一个实例来了解观察者模式的运行原理。

首先，我们建立一个描述观察者的类。

```javascript
function Observer() {
    this.Update = function () {
        // ...
    };
}
```

然后，我们建立一个描述观察者队列的类。

```javascript
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.Add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.Empty = function () {
    this.observerList = [];
};

ObserverList.prototype.Count = function () {
    return this.observerList.length;
};


ObserverList.prototype.Get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.Insert = function (obj, index) {
    var pointer = -1;

    if (index === 0) {
        this.observerList.unshift(obj);
        pointer = index;
    } else if (index === this.observerList.length) {
        this.observerList.push(obj);
        pointer = index;
    }

    return pointer;
};

ObserverList.prototype.IndexOf = function (obj, startIndex) {
    var i = startIndex, pointer = -1;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            pointer = i;
        }
        i++;
    }

    return pointer;
};


ObserverList.prototype.RemoveAt = function (index) {
    if (index === 0) {
        this.observerList.shift();
    } else if (index === this.observerList.length - 1) {
        this.observerList.pop();
    }
};


// Extend an object with an extension
function extend(extension, obj) {
    for (var key in extension) {
        obj[key] = extension[key];
    }
}
```

接着，我们建立一个描述被观察者的类。

```javascript
function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function (observer) {
    this.observers.Add(observer);
};

Subject.prototype.RemoveObserver = function (observer) {
    this.observers.RemoveAt(this.observers.IndexOf(observer, 0));
};

Subject.prototype.Notify = function (context) {
    var observerCount = this.observers.Count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.Get(i).Update(context);
    }
};
```
