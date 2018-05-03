# 香港2018年5月牛牛操作班报名活动前端需求设计文档

[TOC]

## 需求背景

香港通过策划牛牛操作指引班，吸引客户前往体验牛牛产品，并于现场开户送一世免佣，带来优质客户

## 需求要点

1. 活动主题：牛牛操作班报名
1. 页面形式：H5 & 繁体
1. 活动页内容要点简述
    1. 参与报名
        - 用户于活动页面点击“立即报名”，走登录注册流程
        - 登录完毕，自动跳转至选择课程时间页
    1. 课程展示
        - 用户进入课程展示页，展示课程剩余名额
        - 每节课上限为30
        - 对应场次名额若已满，则灰色展示
        - 过期场次以灰色状态展示
    1. 选择及取消课程
        - 选择有剩余名额课程，弹窗提示“是否选择该课程”
        - 若无名额，弹窗提示“名额已满，无法选择
        - 客户仅能报名其中一个课程，不支持报名多个
        - 取消课程：用户可于报名成功页，取消课程；取消课程后自动跳转至活动首页
1. 报名区域要点简述
    1. 报名区域可展示最近两个月的日历；最少零个月，最多两个月（零个月的时候弹出最近无牛牛操作班的弹窗提示）
    1. 今日以前的日期都置灰；今日以前的有课程日期，高亮状态C
    1. 有课程且报名人数未满的日期，高亮状态A，可点击触发事件
        1. 点击后，弹出课程报名弹窗，可选择当日的具体课程
        1. 当日只有一个课程的，此课程默认被勾上且不可取消勾上状态
        1. 有两个或以上课程的，满人的课程有“已满”标识，不可被勾选；余下未满人课程只有一个的话，默认勾选且勾选不可被取消
        1. 有两个或以上未满人课程的，用户可自由选择未满人课程
    1. 有课程且报名人数已满的日期，高亮状态B，不可被点击

### 跳转

- 活动规则
- 登录注册流程
- '一世免佣领取'活动页，hk.futu5.com/seed-gift
- '行情卡领取'活动页，hk.futu5.com/qut/free-card

## 活动涉及到的业务

1. 统一登录注册业务

## 活动页运行环境

1. 牛牛客户端（iOS\安卓）（使用tool-nn组件进行活动页分享）
1. 微信（iOS\安卓）（使用business-weixin组件进行活动页分享）
1. 非牛牛客户端和微信（使用tool-share组件中网页分享进行活动页分享）

## 分享

- 无特殊逻辑
- 分享行为分享活动页本身
- 分享出去的链接的渠道号、子渠道号，和进入页面的渠道号、子渠道号一样

## google sem上报

需要在页面中加入google sem code

## 技术选型

- 框架：无
- 是否单页应用：否
- 路由类型：后端路由

## 使用已有组件

- tool-nn 牛牛分享
- @futuweb/tool-share web端的网站邀请分享
- @futuweb/business-weixin
- @futuweb/tool-pvuv pvuv
- @futuweb/tool-xhr2 ajax请求
- tool-stat 点击事件上报

## 接口协议

(1) 服务端渲染并输出部分

```javascript
isHK: 0（否）；1（是）
uid: 0(未登录); 其他（用户nn号）
class: null(未报名)；
    {
        id: classId,
        name: '牛牛App操作班',
        startTime: 时间戳（秒）,
        endTime: 时间戳（秒），
        location: '香港XXXXXXXX街XXXXXXX大厦XXX楼XXXXX室',
        phone: '852-25233588',

    }
classList: null(最近无课程);
    //最近有课程
    [
        {
            id: classId,
            name: '股票app操作班',
            startTime: 时间戳（秒）,
            endTime: 时间戳（秒）,
            limit: 30, //限制人数
            headcount: 26   //当前人数
        },
        {
            id: classId,
            name: '股票app操作班',
            startTime: 时间戳（秒）,
            endTime: 时间戳（秒）,
            limit: 30, //限制人数
            headcount: 26   //当前人数
        },
        {
            id: classId,
            name: '股票app操作班',
            startTime: 时间戳（秒）,
            endTime: 时间戳（秒）,
            limit: 30, //限制人数
            headcount: 26   //当前人数
        },
        {
            id: classId,
            name: '股票app操作班',
            startTime: 时间戳（秒）,
            endTime: 时间戳（秒）,
            limit: 30, //限制人数
            headcount: 26   //当前人数
        }
    ]
```

(2) 报名课程

- 方法：POST
- url: ''
- 请求参数：

```javascript
{
    classId: classId //课程id
}
```

- 响应字段：

```javascript
{
    code: 0,//0成功；其他失败
    message: '',
    data: {
        id: classId,
        name: '牛牛App操作班',
        startTime: 时间戳（秒）,
        endTime: 时间戳（秒），
        location: '香港XXXXXXXX街XXXXXXX大厦XXX楼XXXXX室',
        phone: '852-25233588'
    }
}
```

(3) 取消课程

- 方法：POST
- url: ''
- 请求参数：

```javascript
{
    classId: classId //课程id
}
```

- 响应字段：

```javascript
{
    code: 0,//0成功；其他失败
    message: '',
    data: {}
}
```

## 逻辑交互图

### 页面初始化

```
graph TD

开始 --> isHK{是否香港地区}
isHK --> |no| alert[提示用户此活动只对香港地区开放]
alert  --> over[结束]
isHK --> |yes| isBook{ 是否已经报名 }
isBook --> |yes| bottom1[贴底按钮文字--查看课程]
isBook --> |no| bottom2[贴底按钮文字--立即参与]
bottom1 --> bookArea[日历报名区初始化]
bottom2 --> bookArea
bookArea --> over
```

### 日历报名区初始化

```
graph TD

开始 --> isHasClass{最近是否有课程}
isHasClass --> |no| noClassTip[展示最近无课程提示]
noClassTip --> over[结束]
isHasClass --> |yes| initCal[日历初始化]
initCal --> step1[今日以前的日期都置灰]
step1 --> step2[今日以前的有课程日期,高亮状态C]
step2 --> step3[有课程且报名人数未满的日期,高亮状态A,可点击触发事件]
step3 --> step4[有课程且报名人数已满的日期,高亮状态B,不可被点击]
step4 --> over
```

### 报名逻辑

```
graph TD

开始 --> doClick[点击有课程的日期]
doClick --> book{调用报名接口}
book --> |成功| showClass[展示订到的课程]
showClass --> over[结束]
book --> |失败| showTip[展示失败提示]
showTip --> over
```

## 代码分层架构

使用原生js，代码主要分为`service`/`main`/`common`

- service
    - http请求
- main 
    - 与页面一一对应
- common 
    - share
    - BASE
    - dialog

## 安全

### (1)XSS

暂未确定

### (2)CSRF

未做CSRF防御策略，有一定安全隐患。

## 估时

|页面模块    |重构  |UI处理(交互) |接口对接联调 |错误与异常处理|自测 |总计 |
|------     |---- |---          |--           |---         |---  |----|
|活动主页   |0    |0            |0            |0           |0   |0    |

## 项目前端代码打包方案

同futunn项目

## 资源缓存处理方案

同futunn项目

## CSS打包方案

同futunn项目