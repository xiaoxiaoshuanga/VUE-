// 引入的不在是构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更轻)，并挂载
const app = createApp(App)
app.mount('#app')

// setTimeout(() => {
//     app.unmount('#app')
// }, 2000)