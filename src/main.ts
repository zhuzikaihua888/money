import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout  from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagModel from '@/models/tagModel.ts'
import model from '@/models/model.ts'
Vue.config.productionTip = false
//全局用vue
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)
//全局变量太多 太依赖window
window.tagList= tagModel.fetch();
window.findTag=(id:string)=>{
 return window.tagList.filter(t=>t.id===id)[0]
};
window.createTag= (name:string) =>{
  if(name){ 
    const message=tagModel.create(name);
    if(message==='duplicated'){
    window.alert('标签重复')
    }
}
};
window.deleteTag=(id:string)=>{
  if(id){
    if(tagModel.delete(id)){
    return  true
    }
   }else{
    return false
   }
};
window.updateTag=(id:string,name:string)=>{
  return tagModel.update(id,name)
};
window.moduleList=model.fetch()


new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
