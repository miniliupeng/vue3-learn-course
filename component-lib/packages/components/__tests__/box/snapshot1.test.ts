import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BoxTest from './index.test.vue';
// 渲染测试场景
describe('Box', () => {
  test('snapshot', () => {
    const wrapper = mount(BoxTest);
    expect(wrapper).toMatchSnapshot();
  });
});
