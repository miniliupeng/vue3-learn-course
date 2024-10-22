import { createElementVNode, ref, toDisplayString } from 'vue';
const Counter = {
  setup() {
    // 这是浏览器创建DOM的 JavaScript API
    // Node.js环境不存在
    const div = document.createElement('div');

    return () => {
      return createElementVNode('div', { class: 'v-counter' }, '测试');
    };
  }
};
export default Counter;
