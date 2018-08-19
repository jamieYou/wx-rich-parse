# 微信小程序富文本解析组件

## 代码从 https://github.com/icindy/wxParse fork。

于 wxParse 的差异：

1. 使用自定义组件重写逻辑
2. 解决 wxParse 中的 template 不能循环使用的问题

## 特性

| 支持特性        | ToDo  |
| ------------- | -----|
| - [x] HTML的大部分标签解析 |[x] table标签 |
| - [x] 内联style          | [x] 小表情emjio |
| - [x] 标签Class          | [x] a标签跳转 |
| - [x] 图片自适应规则       |                |
| - [x] 图片多图片预览       |               |
| - [x] 模版层级可扩展性     |               |
| - [x] 多数据循环方式       |               |
| - [x] 内联style          |   |

## 基本使用方法

1. Copy文件夹 `rich-parse` 到放置自定义组件的地方

2. 引入必要文件

```
// 在使用的View中引入 rich-parse
{
  "usingComponents": {
    "rich-parse": "/自定义组件路径/rich-parse/rich-parse"
  }
}
```

3. 使用
```
<rich-parse content="{{ content }}" type="html"/>
// content 是字符串内容，type 默认 html，可选 md。
```

## 相关文章

* [wxDiscode－微信小程序特殊字符转义符转化工具类](http://weappdev.com/t/wxdiscode/203)
