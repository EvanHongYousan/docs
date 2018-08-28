# 招行银证通项目前端介绍

## 概述

本系统为招商银行香港银证通项目的全新版本，相比于之前 C# 版本，在性能，安全，界面及用户体验方面全方位提升，为客户提供了一个安全，便捷，快速响应的交易平台。目前此项目已全部完成开发，并已上线正式投产。此项目能够顺利推进开发完成并投产，得益于招行领到及富途领导层的大力支持，同时招行和富途的开发伙伴也提供了许多建议和改进措施，在此一并谢过。

## 开发背景

应招商银行香港分行提出的改善银证通项目的性能和用户体验，富途联合招行香港成立了研发项目组，旨在开发一套全新的在线交易，快速行情及咨询平台，充分满足客户在pc及移动端均可畅快交易、查看行情及咨询的需求。

## 开发目标

1. 实现客户可在线提交开户、销户申请
1. 实现客户可在线进行港股、美股的交易
1. 实现客户可实时查看行情、摆盘及分时图
1. 实现客户可在线查询交易历史、资金历史、补领结单
1. 实现客户在线查看资讯新闻
1. 实现客户在线认购新股
1. 实现客户在线下达转仓指示与转仓查询
1. 实现客户移动端的交易和查看行情
1. 实现客户移动端的交易记录查询、交易委托查询

## 设计原则

1. 采用经典的mvc模式，控制逻辑和视图分离
1. 前后端分离，采用json数据接口模式
1. 代码模块化、结构化，方便阅读维护
1. 采用AMD模块加载规范，页面支持按需加载
1. 采用webpack进行打包压缩，提高页面性能
1. 采用gulp进行前端代码构建管理，方便阅读维护
1. ui组件化，方便项目内复用
1. 重复逻辑工具化，方便项目内复用

## 代码结构

### 按文件目录划分

- Data 放各种上传数据 smarty缓存等等
- Doc 存放各种相关文档、说明、手册
- source 代码目录
    - backend 后台代码
    - common_method 后端通用方法
    - config 后端配置
    - frontend 前台即过网页能访问到的代码
        - app 应用程序
            - api
            - Business
            - controllers
            - views 视图页面
                - hkstock
                    - Account 几个'用户账户'模块页面模版
                        - authorizationByCode.htm  开发用登录页
                        - bind.htm 绑定一卡通页
                        - cancel.htm 取消港股账户申请页
                        - cancelUs.htm 取消美股账户申请页
                        - cancelUs.htm 取消美股账户申请页
                        - index-h5.htm 用户状态页h5版
                        - index.htm 用户状态页
                        - login.htm 登录页
                        - open.htm 港股开户页
                        - openUs.htm 美股开户页
                        - sub_navi.htm 小导航栏
                        - unbind.htm 解绑页
                    - Common 页面通用模块模版
                        - error.htm 页面错误模块
                        - footer.htm 页面footer部分
                        - head.htm 页面head标签部分
                        - header.htm 页面头部
                        - js.htm 通用js集合
                        - navi 大导航栏
                    - Error
                        - index-h5.htm 通用错误页h5版
                        - index.htm 通用错误页
                    - H5
                        - account.htm h5账户信息页
                        - CMBLS.htm 招行方面要求注入的与招行客户端通信的bridge代码
                        - orderLog.htm h5委托记录页
                        - riskTips.htm 交易风险提示集合
                        - setting.htm h5用户设置页
                        - tradeHk.htm h5港股交易页
                        - tradeUs.htm h5美股交易页
                        - tradeLog.htm h5交易记录页
                    - Index Web港股交易页
                        - index.htm 港股交易页
                        - orderDetail.htm 委托详情模版
                        - sub_navi.htm 小导航条模版
                    - Info 市场资讯页
                        - announcement.htm 公司公告页
                        - equity.htm 认股权证页
                        - index.htm 资讯首页
                        - ipo.htm 新股上市页
                        - product.htm 金融产品页
                        - qut.htm 行情信息页
                        - sub_navi.htm 小导航条
                    - Ipo 新股认购页
                        - index.htm 新股认购首页
                        - status.htm 认购状态查询页
                        - apply.htm 网上新股认购模版
                        - applyConfirm.htm 新股认购确认模版
                        - applyDone.htm ipo申请完成模版
                        - applyStatus.htm 认购详情模版
                        - detail.htm 新股详细资料模版
                        - sub_navi.htm 小导航条
                    - Map 网站地图
                        - index.htm 网站地图
                    - Record 交易记录查询
                        - claimHistory.htm 补领查询页
                        - fund.htm 资金转账记录查询页
                        - sub_navi.htm 小导航条
                        - summaryClaim.htm 结单补领页
                        - trade.htm 证券交易记录查询页
                    - Transfer 转仓页
                        - history.htm 转仓交易记录查询页
                        - index.htm 转仓页
                        - sub_navi.htm 小导航条
                    - Us Web美股交易页
                        - index.htm 美股交易页
        - htdocs
            - css 网站样式文件，具体页面样式文件对应请看views文件夹中的模版文件
            - images 网站图片文件
            - js 一些用到的类库存放处
            - scripts 前端业务js源文件
                - app 业务js文件，和views文件夹中的模板文件一一对应
                    - account 几个'用户账户'模块页面业务js文件，与views中的Account文件夹对应
                    - common 业务通用js
                    - H5 h5页面业务js，与views中的H5文件夹对应
                    - info 市场资讯页页面业务js，与views中的info文件夹对应
                    - ipo 新股认购页页面业务js，与views中的ipo文件夹对应
                    - oauthuser 鉴权js
                    - quote 已废弃使用
                    - record 记录查询页页面业务js，与views中的record文件夹对应
                    - templates 已废弃使用
                    - trade 港股交易页页面业务js，与views中的index文件夹对应
                    - transfer 转仓页页面业务js，与views中的transfer文件夹对应
                    - ustrade 美股交易页页面业务js，与views中的ustrade文件夹对应
                    - config.js requires.js配置项，已废弃，改用webpack配置进行打包
                    - 其余js文件皆是业务相关js
                - common 用到的一些第三方类库存放处
                - futu 富途这边封装的类库存放处
                    - _base 一些基本工具库
                    - canvas 操作canvas元素的类库
                    - time 日历、日期格式化库存放处
                - lib 用到的一些第三方类库存放处
                    - echarts 改写过的echarts图表库，以满足业务的需求
                    - zrender canvas图形库
                    - sprd.js 股票查询列表文件，由后端生成
                    - stk_sprd.js 股票查询列表文件，由后端生成
                    - structureStockList.js 对股票查询列表文件做封装
                    - us_stock.js 美股股票查询列表文件
                    - usStructureStockList.js 对美股股票查询列表文件做封装
            - scripts-build 打包压缩好的前端业务js文件,里面的文件和scripts里的文件一一对应
            - site 实例文件，和实际运行站点无联系
        - node_modules node.js包
        - gulpfile.js 前端打包压缩构建流程管理文件
        - webpack.config 前端打包压缩构配置文件
        - package.json node包版本记录文件
    - lang 后端语言配置
    - lib 后端类库存放位置

### 按功能页面划分

1. http://hkstock.cmbchina.com/，港股交易页，开发入口：cmbhk\source\frontend\app\views\hkstock\Index\index.htm
1. http://hkstock.cmbchina.com/us，美股交易页，开发入口：cmbhk\source\frontend\app\views\hkstock\Us\index.htm
1. http://hkstock.cmbchina.com/record/trade, 交易历史页，开发入口：cmbhk\source\frontend\app\views\hkstock\Record\trade.htm
1. http://hkstock.cmbchina.com/record/fund, 资金历史页，开发入口：cmbhk\source\frontend\app\views\hkstock\Record\fund.htm
1. http://hkstock.cmbchina.com/record/claim-history, 补领查询页，开发入口：cmbhk\source\frontend\app\views\hkstock\Record\claim-history.htm
1. http://hkstock.cmbchina.com/info，资讯首页，开发入口：cmbhk\source\frontend\app\views\hkstock\Info\index.htm
1. http://hkstock.cmbchina.com/info/equity，认股权证页，开发入口：cmbhk\source\frontend\app\views\hkstock\Info\equity.htm
1. http://hkstock.cmbchina.com/info/announcement，公司公告页，开发入口：cmbhk\source\frontend\app\views\hkstock\Info\announcement.htm
1. http://hkstock.cmbchina.com/info/ipo，新股上市页，开发入口：cmbhk\source\frontend\app\views\hkstock\Info\ipo.htm
1. http://hkstock.cmbchina.com/ipo，认购新股页，开发入口：cmbhk\source\frontend\app\views\hkstock\Ipo\index.htm
1. http://hkstock.cmbchina.com/ipo/status，认购状况页，开发入口：cmbhk\source\frontend\app\views\hkstock\Ipo\status.htm
1. http://hkstock.cmbchina.com/transfer/，转仓指示页，开发入口：cmbhk\source\frontend\app\views\hkstock\Transfer\index.htm
1. http://hkstock.cmbchina.com/transfer/history，转仓查询页，开发入口：cmbhk\source\frontend\app\views\hkstock\Transfer\history.htm
1. http://hkstock.cmbchina.com/account，港股账户页，开发入口：cmbhk\source\frontend\app\views\hkstock\Account\index.htm
1. http://hkstock.cmbchina.com/account?market=us，美股账户页，开发入口：cmbhk\source\frontend\app\views\hkstock\Account\index.htm

## 前端构建

### 依赖

1. node.js 7.0版本以上
1. npm 4.0版本以上

### 步骤

1. 进入 cmbhk\source\frontend
1. 运行 npm install, 等待node.js包安装完成
1. gulp指令为开发环境打包指令，文件打包后，会继续对scripts文件夹中的源文件进行监控；源文件发生变动，会自动进行打包
1. gulp prod 指令会产生打包、压缩好的生产坏境业务js
1. 其余gulp指令请看 gulpfile.js 文件