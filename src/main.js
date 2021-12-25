import { createApp } from 'vue/dist/vue.esm-bundler';
import { defineAsyncComponent } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'
import DataInfo from '../plugins/info'

const BaseInput = defineAsyncComponent(() => import('@/components/BaseInput'))
const BaseButton = defineAsyncComponent(() => import('@/components/BaseButton'))
const BaseSelect = defineAsyncComponent(() => import('@/components/BaseSelect'))
const BaseError = defineAsyncComponent(() => import('@/components/BaseError'))


createApp(App)
    .component('BaseInput', BaseInput)
    .component('BaseButton', BaseButton)
    .component('BaseSelect', BaseSelect)
    .component('BaseError', BaseError)
    .use(store)
    .use(router)
    .use(DataInfo)
    .mount('#app')
