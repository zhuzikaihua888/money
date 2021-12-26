import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/creatId/clone.ts'
import createId from '@/creatId/creatId.ts'
const localStorageKeyName='recordList'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },
  mutations: {
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
    findTag(state,id) {
      return state.tagList.filter(t => t.id === id)[0];
    },
    removeTag(state,id) {
      let index = -1;
      for (let i = 0; i < this.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      state.tagList.splice(index, 1);
      store.commit('saveTags')
      return true;
    },
    updateTag(state,id,name) {
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map(item => item.name);
        if (names.indexOf(name) >= 0) {
          return 'duplicated';
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTags')
          return 'success';
        }
      } else {
        return 'not found';
      }
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
 
 
 
  },
})


export default store;