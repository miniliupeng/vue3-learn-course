
pnpm 9.x后 link-workspace-packages改为了默认为 false，需要新建.npmrc文件，添加link-workspace-packages=true，在安装依赖时优先在本地链接，而不是从 registry（远程） 中下载


## 组件库开发三要素
- 用 monorepo 管理多种类型组件库，这类项目的代码管理方式，可以一个仓库同时聚合管
理多个项目，让项目之间代码依赖使用更方便；
- 源码要编译成多种模块格式（CommonJS 和 ES Module），主要考虑到前端代码 npm 模
块的时候，目前主流是 ES Module 模块格式，但还是存在很多传统的 CommonJS 模块格
式的使用兼容。所以在开发自研组件库的时候，尽量要考虑这两种模块格式；
- 基于 Less 等预处理 CSS 语言来开发组件库的样式，由于 CSS 语言能力有限，无法像
JavaScript 那样可以使用各种编程逻辑和特性，所以需要借助 CSS 预处理语言进行开发
CSS。


## 组件库的主题方案

- 梳理组件库用到的基本颜色和对应的颜色梯度，用 Less 或其他 CSS 预处理器语言来编
写；
- 每个组件通过 CSS Variable 来控制各种语义化颜色，例如按钮的背景颜色；
- 主题控制是利用 CSS Varibale 来修改覆盖每个组件里语义化的“颜色”和“梯度号”。