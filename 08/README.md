# Vue.js 3.x 自研组件库

将组件库里的 Vue.js 代码编译成 JavaScript 文件，保证能支
持引入组件库 npm 模块的同时，还要能自动识别 TypeScript 类型、支持 ES Module 和
CommonJS 模块格式、组件按需加载等操作

## 技术要点: 
### monorepo 管理组件代码
我们在企业中开发组件库的时候，并不会像开源组件库那样，一概而论地将组件库划分为基础
功能组件（例如 Button 组件、Dialog 组件），而是要考虑到多业务场景类型，划分成基础功
能组件类型、某某业务组件类型等。
这个时候，我们就需要把组件库划分成多个 npm 模块进行输出管理，同时需要尽量用一个代
码仓库进行维护，因为不同类型的组件可能存在互相依赖或者引用的关系，要保证能在一个代
码仓库中快速调试多个 npm 模块的代码效果。一个仓库管理多个 npm 模块（多个子项目），
就需要用到 monorepo 的项目管理形式。

方案： Lerna、 pnpm

#### 基于 pnpm 的 monorepo 方案的实现

初始化代码目录；
基于 pnpm 配置 monorepo 项目；
安装所有子项目依赖。

### Vue.js 3.x 源文件的多种模块格式编译
- 要将源码编译成 ES Module 和 CommonJS 格式
- 能够按需加载
- .d.ts
### 基于 Less 开发 CSS 样式文件和独立编译



pnpm 9.x后 link-workspace-packages改为了默认为 false，需要新建.npmrc文件，添加link-workspace-packages=true，在安装依赖时优先在本地链接，而不是从 registry（远程） 中下载
