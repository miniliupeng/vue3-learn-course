# 响应式开发操作：如何理解和使用 Vue 3 的响应式数据


## 响应式 API reactive
必须接受一个对象数据，通过内部封装返回一个 Proxy 类型的数据
对象，这个 Proxy 数据就是响应式的核心。可以监听对象里每个属性的“读写”操作，通过“监
听”或“劫持”属性的“读”和“写”的数据变化，触发依赖对应数据的模板视图进行重新渲染展示最
新的数据值

## Ref
如果 ref 接收的是基础类型，例如 Number、String、Boolean、Null、Undefined 等，返回的
响应式数据类型就是 Vue.js 3 定义的响应式数据类型 RefImpl。

如果 ref 接收的是对象的数据类型，例如 JSON、Array 数据，那么返回的响应式数据类型也
是 RefImpl 数据类型。基于 Proxy 封装的数据是放在 RefImpl 数据中的 value 属性里

## ref 和 reactive 如何选择使用？

- 如果是要定义对象类型的响应式数据，那么我们可
以优先选择 reactive 来定义
- 如果要定义基础类型的响应式数据，就用 ref 来定义

## 如何选择合适使用其它响应式 API？

### “去除响应式”的响应式 API toRaw

### watch


## Vue.js 3 的响应式开发有什么需要注意的

### 响应式数据解构或者属性赋值后，可能会丢失响应式联系

### 慎用浅层响应式作用 API: 例如 shallowReactive 和 shallowReadonly

### 慎用副作用 API