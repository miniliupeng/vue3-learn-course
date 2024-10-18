import { defineComponent } from 'vue';

export const Box = defineComponent({
  props: {
    class: String
  },
  setup(props, { slots }) {
    return () => {
      return <div>{slots?.default?.()}</div>;
    };
  }
});
