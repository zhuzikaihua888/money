import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout  from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagModel from '@/models/tagModel.ts';

Vue.config.productionTip = false
//全局用vue
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)

window.tagList= tagModel.fetch();
window.createTag=(name:string){
  if(name){ 
    const message=tagModel.create(name);
    if(message==='duplicated'){
    window.alert('标签重复')
    }
}




new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
