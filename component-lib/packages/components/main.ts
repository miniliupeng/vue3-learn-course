import { createApp } from 'vue';
// import Example from './examples/theme.vue';
// import Example from './examples/message.vue';
import Example from './examples/dialog.vue';
import './src/index.less';

const app = createApp(Example);

app.mount(document.querySelector('#app') as HTMLDivElement)

