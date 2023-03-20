import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stroe";

// 引入vant函数组件的样式 Toast，Dialog，Notify，ImagePreview
import "./lib/vant";

const app = createApp(App);
app.use(store).use(router).mount("#app");
