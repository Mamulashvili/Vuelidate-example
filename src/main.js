import { createApp } from 'vue/dist/vue.esm-bundler';
import { defineAsyncComponent } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import DataInfo from '../plugins/info'

const BaseInput = defineAsyncComponent(() => import('@/components/BaseInput'))


createApp(App)
    .component('BaseInput', BaseInput)
    .use(store)
    .use(router)
    .use(DataInfo)
    .mount('#app')
