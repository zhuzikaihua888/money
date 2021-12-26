import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/creatId/clone.ts'
import createId from '@/creatId/creatId.ts'
import router from '@/router'
const localStorageKeyName='recordList'


Vue.use(Vuex)
type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}
const store = new Vuex.Store({
  state: {
    recordList: [] ,
    tagList: [] ,
    currentTag:undefined,
  }as RootState,
  mutations: {
    setCurrentTag(state,id:string) {
      state.currentTag= state.tagList.filter(t => t.id === id)[0];  
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    createRecord(state,record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
     state.recordList.push(record2);
     store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(state.recordList));
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state,name) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) { 
      }
      const id = createId().toString();
      state.tagList.push({id, name: name});
      store.commit('saveTags')
      window.alert('添加成功');  
    },
    updateTag(state,object:{id: string, name: string}) {
     const {id,name}=object;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags')
        }
      } 
    },
    removeTag(state,id) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if(index>=0){
      state.tagList.splice(index, 1);
      store.commit('saveTags'); 
      router.back();
      }else{
        window.alert('删除失败')
      } 
    },
    
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
   
 
 
  },
})


export default store;